import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <Wrapper>
                <Component id={"1"} />
                <Component id={"2"} />
                <Component id={"3"} />
            </Wrapper>
        </CollapseWrapper>
    );
};

const Wrapper = ({ children }) => {
    const list = React.Children.map(children, (child) => {
        return <li key={child.props.id}>{child}</li>;
    });
    return <ol>{list}</ol>;
};

const Component = () => {
    return <div>Компонент списка</div>;
};

Wrapper.propTypes = {
    children: PropTypes.array
};

export default ChildrenExercise;
