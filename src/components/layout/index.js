import React from "react";
import Navigation from "../Navigation";
import TopNav from "../TopNav";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavShow: false // 判断侧边导航栏是否显示
    };
  }

  toggleNavShow(isNavShow) {
    this.setState({ isNavShow });
  }

  toggleNavHide(isNavShow) {
    this.setState({ isNavShow });
  }

  render() {
    const { isNavShow } = this.state;
    return (
      <div>
        <TopNav showNav={() => this.toggleNavShow(true)} />
        {isNavShow && <Navigation hideNav={() => this.toggleNavHide(false)} />}
      </div>
    );
  }
}

export default Layout;
