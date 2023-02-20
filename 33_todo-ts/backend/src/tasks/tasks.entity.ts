import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Priority } from '../enums/Priority';
import { Status } from '../enums/Status';

// tsconfig.json の strictPropertyInitialization を false にしている。
// @が使えるように、experimentalDecorators と emitDecoratorMetadata を true にしている。

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  title: string;

  @Column({ type: 'varchar', length: 255 })
  date: string;

  @Column({ type: 'longtext' })
  description: string;

  @Column({ type: 'enum', enum: Priority, default: Priority.normal })
  priority: Priority;

  @Column({ type: 'enum', enum: Status, default: Status.todo })
  status: Status;
}
