//append_imports_start

import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm'; //_splitter_
//append_imports_end
@Entity('user_details')
export class user_details {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;
  @Column({ name: 'name', nullable: false, type: 'text', primary: false })
  name: string;
  @Column({ name: 'phone', nullable: false, type: 'text', primary: false })
  phone: string;
  @Column({ name: 'email', nullable: false, type: 'text', primary: false })
  email: string;
  @Column({ name: 'file', nullable: false, type: 'jsonb', primary: false })
  file: any;
  @Column({ name: 'details', nullable: false, type: 'jsonb', primary: false })
  details: any;
}
