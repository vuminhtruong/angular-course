import {Request, Response} from 'express';
import {COURSES} from '../src/db-data';


export function getAllCourses(req: Request, res: Response) {


    res.status(200).json(Object.values(COURSES));


}


export function getCourseById(req: Request, res: Response) {

    const courseId = req.params['id'];

    const courses: any = Object.values(COURSES);

  // tslint:disable-next-line:no-shadowed-variable triple-equals
    const course = courses.find(course => course.id == courseId);

    res.status(200).json(course);
}
