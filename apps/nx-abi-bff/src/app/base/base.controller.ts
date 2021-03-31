import { Document }                                             from 'mongoose';
import { Body, Delete, Get, Header, Options, Param, Post, Put } from '@nestjs/common';
import { BaseService }                                          from './base.service';

export type ApiResource<T> = {time: number, data: T};
export function from<T>(data: T): ApiResource<T> {
  return {time: Date.now(), data};
}

export class BaseController<T extends Document> {
  constructor(protected service: BaseService<T>) {
  }

  @Get()
  async getAll(): Promise<ApiResource<T[]>> {
    return from(await this.service.getAll());
  }

  @Get(':id')
  async getById(@Param() params): Promise<ApiResource<T>> {
    const id = params.id;

    if (!id) return null;

    return from(await this.service.getById(params.id));
  }

  @Post()
  async create(@Body() entity: T): Promise<ApiResource<T>> {
    return from(await this.service.create(entity));
  }

  @Put(':id')
  async update(@Body() entity: T): Promise<ApiResource<T>> {
    return from(await this.service.update(entity));
  }

  @Delete()
  async delete(@Body() entity: T): Promise<ApiResource<T>> {
    console.log('delete', entity);
    return from(await this.service.delete(entity));
  }

  @Options(':id')
  async preflight(): Promise<boolean> {
    return true;
  }
}
