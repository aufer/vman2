import { Document }                                    from 'mongoose';
import { Body, Delete, Get, Header, Param, Post, Put } from '@nestjs/common';
import { BaseService }                                 from './base.service';

export type ApiResource<T> = {time: number, data: T};
export function from<T>(data: T): ApiResource<T> {
  return {time: Date.now(), data};
}

export class BaseController<T extends Document> {
  constructor(protected service: BaseService<T>) {
  }

  @Get()
  @Header('Content-Type', 'application/json')
  @Header('Access-Control-Allow-Origin', '*')
  async getAll(): Promise<ApiResource<T[]>> {
    return from(await this.service.getAll());
  }

  @Get(':id')
  @Header('Access-Control-Allow-Origin', '*')
  async getById(@Param() params): Promise<ApiResource<T>> {
    const id = params.id;

    if (!id) return null;

    return from(await this.service.getById(params.id));
  }

  @Post()
  async create(@Body() entity: T): Promise<ApiResource<T>> {
    return from(await this.service.create(entity));
  }

  @Put()
  async update(@Body() entity: T): Promise<ApiResource<T>> {
    return from(await this.service.update(entity));
  }

  @Delete()
  async delete(@Body() entity: T): Promise<ApiResource<T>> {
    return from(await this.service.delete(entity));
  }
}
