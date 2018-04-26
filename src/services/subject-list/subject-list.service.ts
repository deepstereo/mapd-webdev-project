import { Welcome } from './../../models/welcome.model';
import { Professor } from './../../models/professor/professor.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { CourseSubject } from "../../models/subject/subject.model";
import { Injectable } from '@angular/core';

@Injectable()
export class SubjectListService {

    private subjectListRef = this.db.list<CourseSubject>('subject-list');
    private professorsListRef = this.db.list<Professor>('professors-list');
    private welcomeListRef = this.db.list<Welcome>('welcome-list');

    constructor(private db: AngularFireDatabase ){

    }

    getSubjectList() {
        return this.subjectListRef;
    }

    getProfessorsList() {
        return this.professorsListRef;
    }

    getWelcomeList(){
        return this.welcomeListRef;
    }

}