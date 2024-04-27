export interface Grade {
    gradeName: string;
}

export interface Center {
    centerName: string | null;
}

export interface Student {
    name: string;
    identityCardNo: string;
    gradeID: number;
    centerID: number;
    address: string;
    telNo: string;
    email: string;
    id: number;
    grade: Grade;
    center: Center;
}