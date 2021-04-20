import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { sign }                                     from 'jsonwebtoken';
import { UserRole }                                 from '@nx-abi-mgmt/nx-abi-shared';
import { UserService }                              from '../users/user.service';
import { User }                                     from '../users/user.model';
import { JWT_SECRET }                               from '../constants';
import { Employee }                                 from '../employees/employees.model';
import { EmployeesService }                         from '../employees/employees.service';

export enum Provider {
  GOOGLE = 'google',
}

const ADMINS = [
  'administrator@abi-moeglingen.de'
];

const VORSTAND = [
  'jule@abi-moeglingen.de'
];

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UserService, private readonly employeeService: EmployeesService) {
  }

  async validateOAuthLogin(user: User): Promise<string> {
    try {
      user.role = this.getRole(user.email);

      let u = await this.usersService.findOneByThirdPartyId(user.thirdPartyId, user.provider);
      if (!u) {
        u = await this.usersService.update({...user, lastLogin: new Date()}, true);
      }

      if (!this.isMgmtRole(u.role)) {
        const emp = await this.employeeService.findByWorkEmail(user.email);

        if (!emp) {
          const employee = new Employee();
          employee.firstName = u.givenName;
          employee.lastName = u.familyName;
          employee.workEmail = u.email;
          employee.mgmt = this.isMgmtRole(u.role);
          await this.employeeService.upsertFromUser(employee, user);
        }
      }

      const payload = {
        id: u.id,
        roles: [u.role],
      };

      return sign(payload, JWT_SECRET);
    } catch (err) {
      throw new InternalServerErrorException('Could not validate OAuth login', err.message);
    }
  }

  private getRole(mail: string) {
    if (ADMINS.includes(mail)) return UserRole.ADMIN;
    if (VORSTAND.includes(mail)) return UserRole.VORSTAND;
    return UserRole.EMPLOYEE;
  }

  isMgmtRole(role) {
    return [UserRole.ADMIN, UserRole.VORSTAND].includes(role as UserRole);
  }
}
