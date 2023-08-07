const Header = (props) => {
    console.log(props);
    return (
        <div>
            <h1>{props.course.name}</h1>
        </div>
    );
};

const Part = (props) => {
    console.log(props);
    return (
        <p>
            {props.part.name} {props.part.exercises}
        </p>
    );
};

const Content = (props) => {
    console.log(props);
    return (
        <div>
            {props.course.parts.map((part, index) => (
                <Part key={index} part={part} />
            ))}
        </div>
    );
};

const Total = (props) => {
    console.log(props);
    const totalExercises = props.course.parts.reduce((acc, part) => acc + part.exercises, 0);
    return (
        <div>
            <p>
                Number of exercises {totalExercises}
            </p>
        </div>
    );
};

const Course = ({course}) => {
    return (
        <div>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
        </div>
    );
};

export default Course;