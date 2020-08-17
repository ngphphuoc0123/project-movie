import React, {Fragment} from "react";
import { Route } from "react-router-dom";

// component HomeLayout
const HomeLayout = props => {
  return (
    <Fragment> 
    {/* Fragment là thẻ ảo, nếu dùng div thì nó sẽ display ra bên ngoài 1 cặp thẻ div nhưng ko để làm gì cả, dùng fragment để ko dính thẻ div vô duyên như v  */}
      {/* nếu nhận 1 props bình thường thì sẽ là props.name (props là name) nhưng khi truyền vào 1 đống html thì là props.children */}
      {props.children}
    </Fragment>
  );
};

export default function HomeTemplate({ Component, ...props }) {
  //...props là những thứu còn lại nằm trong props sau khi đã bóc tách thằng Component ra (tức là còn lại thằng path (là đường dẫn) và exact)
  return (
    <Route
      {...props}
      render={(
        propsComponent // ()=>() viết tắt cho ()=>return{} nhưng do return có 1 dòng nên viết như thế kia để gọn code
      ) => (
        <HomeLayout>
          <Component {...propsComponent} />
        </HomeLayout>
      )}
    />
  );
}
