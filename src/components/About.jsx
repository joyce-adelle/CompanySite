import React from "react";
import What from "./What";
import Who from "./Who";
import Where from "./Where";

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: 0 };
  }

  render() {
    return (
      <section id="about" class="about">
        <div class="container">

          <header class="text-center mb-3">
            <h2 class="lined text-uppercase">About us</h2>
          </header>

          {this.state.active == 0 && <What />}
          {this.state.active == 1 && <Who />}
          {this.state.active == 2 && <Where />}

          <div class="d-flex">
            <button
              onClick={() => this.setState({ active: 0 })}
              type="button"
              className="btn btn-primary button p-2 flex-fill"
            >
              What we are
            </button>

            <button
              onClick={() => this.setState({ active: 1 })}
              type="button"
              className="btn btn-primary button  p-2 flex-fill"
            >
              Who we are
            </button>

            <button
              onClick={() => this.setState({ active: 2 })}
              type="button"
              className="btn btn-primary button  p-2 flex-fill"
            >
              Where we work
            </button>
          </div>
        </div>
      </section>
    );
  }
}
