import { ClinicEntity, ClinicRepository, CreateClinicDto, PaginationDto, PaginationEntity, UpdateClinicDto } from "../../domain";

export class ClinicService {

    constructor(private readonly repository: ClinicRepository) { }

    public async creatingClinic(dto: CreateClinicDto): Promise<ClinicEntity> {
        return await this.repository.create(dto);
    }

    public async updatingClinic(dto: UpdateClinicDto): Promise<ClinicEntity> {
        return await this.repository.update(dto);
    }



    public async findingOneById(id: string): Promise<ClinicEntity> {

        return await this.repository.findOneById(id);
    }


    public async findingMany(dto: PaginationDto): Promise<{ pagination: PaginationEntity, clinics: ClinicEntity[] }> {
        return await this.repository.findMany(dto);
    }

    public async changingStatus(dto: UpdateClinicDto): Promise<ClinicEntity> {
        return await this.repository.changeStatus(dto);
    }


    public async uploadingPhoto(dto: any): Promise<any>{
        return await this.repository.uploadPhoto(dto)
    }

}