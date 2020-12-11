import { Document, Model } from 'mongoose';

export abstract class BaseService<T extends Document> {
  protected constructor(protected data: Model<T>) {
  }

  getAll(): Promise<T[]> {
    return this.data.find().exec();
  }

  getById(id: string): Promise<T> {
    return this.data.findById(id).exec();
  }

  create(record: T): Promise<T> {
    const entity = new this.data(record);
    return entity.save();
  }

  update(record: T): Promise<T> {
    const entity = new this.data(record);
    return entity.save();
  }

  delete(record: T): Promise<T> {
    return this.data.findByIdAndDelete(record.id).exec();
  }
}
