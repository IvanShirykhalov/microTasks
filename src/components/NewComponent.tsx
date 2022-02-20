import React from 'react';

type NewComponentType = {
    students: StudentType[]
}

type StudentType = {
    id: number,
    name: string,
    age: number
}

export const NewComponent = (props: NewComponentType) => {

    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'},
    ]
    return (
        <>
            <ul style={{}}>
                {props.students.map((s, i) => {
                    return (
                        <li key={i}>
                            {`student: ${s.name}, age: ${s.age}`}
                        </li>
                    )
                })}
            </ul>
            <table>
                <tr>
                    <th>id</th>
                    <th>manufacturer</th>
                    <th>model</th>
                </tr>
                <tr>
                    <td>
                        {topCars.map((a, i) => {
                            return (
                                <div>{i+1}</div>
                            )
                        })}
                    </td>
                    <td>
                        {topCars.map((a, i) => {
                            return (
                                <div>{a.manufacturer}</div>
                            )
                        })}
                    </td>
                    <td>
                        {topCars.map((a, i) => {
                            return (
                                <div>{a.model}</div>
                            )
                        })}
                    </td>

                </tr>
            </table>
        </>
    );
};
