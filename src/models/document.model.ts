import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";

@Table({
  tableName: "documents",
  createdAt: "created_at",
  updatedAt: "updated_at",
})
export class DocumentModel extends Model<DocumentModel> {
  @PrimaryKey
  @Column({
    field: "doc_guid",
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  docGuid?: string;

  @Column
  path?: string;

  @Column({ field: "original_name" })
  originalName!: string;

  @Column({ field: "file_name" })
  fileName!: string;

  @Column({ field: "size" })
  size!: number;

  @Column({ field: "mime_type" })
  mimeType!: string;
}
