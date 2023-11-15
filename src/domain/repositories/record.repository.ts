import { RecordEntity } from "../entities";

export abstract class RecordRepository {

  abstract findMany(): Promise<RecordEntity[]>;

  abstract create(dto: any): Promise<RecordEntity>;

  abstract uptate(dto: any): Promise<RecordEntity>;

  abstract hiddeRecords(id: string): Promise<Boolean>;
}