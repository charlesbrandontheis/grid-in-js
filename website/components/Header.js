import React from "react";
import Link from "next/link";
import { withRouter } from "next/router";
import styled from "styled-components";
import meta from "../../package.json";
import readme from "../../README.md";
import colors from "../utils/color";
import { GridConsumer } from "./GridProvider";
import Markdown from "./Markdown";

const Container = styled.header`
  padding-top: 2rem;
`;

const TabAnchor = styled.a`
  background: ${props =>
    props.current === props.href ? colors.background1 : colors.background0};
  display: inline-block;
  margin-right: -1px;
  outline: 2px solid silver;
  outline-offset: -1px;
  padding: 1rem;
  position: relative;
  text-decoration: none;

  :focus {
    outline-color: blue;
    z-index: 2;
  }

  :hover {
    background: ${colors.background1};
  }

  :active {
    outline-color: silver;
    z-index: 1;
  }

  :after {
    border-bottom: ${props =>
      props.current === props.href
        ? `2px solid ${colors.background1}`
        : "none"};
    bottom: 0;
    content: "";
    left: 1px;
    position: absolute;
    width: calc(100% - 2.5px);
    z-index: 3;
  }
`;

const Tabs = styled.div`
  position: relative;
  margin-top: 4rem;

  :after {
    border-bottom: 2px solid silver;
    bottom: 0;
    content: "";
    left: 0;
    position: absolute;
    width: 100%;
    z-index: 0;
  }
`;

class Header extends React.Component {
  render() {
    return (
      <GridConsumer>
        {({ state }) => (
          <Container>
            <div className={`${state.config.prefix}grid`}>
              <Markdown prefix={state.config.prefix}>
                {`<sup>v${meta.version}</sup>

${readme.split("##")[0]}`}
              </Markdown>
            </div>
            <Tabs>
              <div className={`${state.config.prefix}grid`}>
                <div className={`${state.config.prefix}col`}>
                  <Link href="/">
                    <TabAnchor current={this.props.router.pathname} href="/">
                      Live Demo
                    </TabAnchor>
                  </Link>
                  <Link href="/docs">
                    <TabAnchor
                      current={this.props.router.pathname}
                      href="/docs"
                    >
                      Documentation
                    </TabAnchor>
                  </Link>
                </div>
              </div>
            </Tabs>
          </Container>
        )}
      </GridConsumer>
    );
  }
}

export default withRouter(Header);
