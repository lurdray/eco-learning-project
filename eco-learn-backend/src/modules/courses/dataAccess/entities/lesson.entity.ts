import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { Course } from './course.entity';
import { Quiz } from './quiz.entity';
// import { Quiz } from './Quiz';

@Entity('lessons')
export class Lesson {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column('json')
  objectives: string[];

  @Column({ type: 'text', nullable: true })
  overview: string;

  @Column({ type: 'text', nullable: true })
  content: string;

  @Column({ type: 'text', nullable: true })
  vidUrl: string;

  @ManyToOne(() => Course, (course) => course.lessons)
  course: Course;

  @OneToOne(() => Quiz, (quiz) => quiz.lesson)
  @JoinColumn()
  quiz: Quiz;

  @CreateDateColumn()
  createdAt: Date;
}
