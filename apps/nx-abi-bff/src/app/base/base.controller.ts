import { Document }                                          from 'mongoose';
import { Body, Delete, Get, Options, Param, Post, Put, Req } from '@nestjs/common';
import { ActionLog }                                         from '../util/action-log.decorator';
import { BaseService }                                       from './base.service';

export type ApiResource<T> = { time: number, data: T };

export function from<T>(data: T): ApiResource<T> {
  return {time: Date.now(), data};
}

export class BaseController<T extends Document> {
  constructor(protected service: BaseService<T>) {
  }

  @Get()
  @ActionLog()
  async getAll(@Req() req): Promise<ApiResource<T[]>> {
    return from(await this.service.getAll());
  }

  @Get(':id')
  @ActionLog()
  async getById(@Param() params): Promise<ApiResource<T>> {
    const id = params.id;

    if (!id) return null;

    return from(await this.service.getById(params.id));
  }

  @Post()
  @ActionLog()
  async create(@Body() entity: T): Promise<ApiResource<T>> {
    return from(await this.service.create(entity));
  }

  @Put(':id')
  @ActionLog()
  async update(@Body() entity: T, @Param() params): Promise<ApiResource<T>> {
    const id = params.id;
    return from(await this.service.update({...entity, id}));
  }

  @Delete()
  @ActionLog()
  async delete(@Body() entity: T): Promise<ApiResource<T>> {
    return from(await this.service.delete(entity));
  }

  @Options(':id')
  @ActionLog()
  async preflight(): Promise<boolean> {
    return true;
  }
}
