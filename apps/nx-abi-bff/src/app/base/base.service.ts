import { Document, Model, Types } from 'mongoose';

export abstract class BaseService<T extends Document> {
  protected constructor(protected data: Model<T>) {
  }

  async getAll(): Promise<T[]> {
    return  this.data.find().exec();
  }

  getById(id: string): Promise<T> {
    return this.data.findById(id).exec();
  }

  create(record: T): Promise<T> {
    return new this.data(record).save();
  }

  update(record: any, upsert = false): Promise<T> {
    if (upsert && !record.id) record.id = new Types.ObjectId();
    console.log('UPDATE', record);
    return this.data.findByIdAndUpdate(record.id, record, {upsert, new: true}).exec();
  }

  delete(record: T): Promise<T> {
    return this.data.findByIdAndDelete(record.id).exec();
  }
}
