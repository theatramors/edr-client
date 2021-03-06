import axios from 'axios';
import classnames from "classnames";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardImg, CardText, CardTitle, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from "reactstrap";

export default class ArtistDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: "1",
      artist: {
        id: null,
        name: null,
        genre: null
      },
      albums: [{
        id: null,
        name: null,
        year: null
      }],
      songs: [{
        id: null,
        name: null
      }]
    };

    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    document.title = "" + this.state.artist.name;

    axios.get('/artists/' + this.props.match.params.id).then((answer) => {
      this.setState({
        artist: answer.data,
        songs: answer.data.songs,
        albums: answer.data.albums
      });
    }).catch((error) => {
      // TODO: Add error handling
    });
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <Row>
        <Col>
          <div className={"p-4 border rounded bg-light shadow"}>
            <ArtistInfo artist={this.state.artist}/>
            <Nav tabs className={"mb-4"}>
              <NavItem>
                <NavLink className={classnames({ active: this.state.activeTab === "1" })} onClick={() => this.toggle("1")}>
                  <span className={"small text-muted"}>OVERVIEW</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={classnames({ active: this.state.activeTab === "2" })} onClick={() => this.toggle("2")}>
                  <span className={"small text-muted"}>TRACKS</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={classnames({ active: this.state.activeTab === "3" })} onClick={() => this.toggle("3")}>
                  <span className={"small text-muted"}>ALBUMS</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={classnames({ active: this.state.activeTab === "4" })} onClick={() => this.toggle("4")}>
                  <span className={"small text-muted"}>INFO</span>
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId={"1"}>
                <Row>
                  <Col xs={"auto"}>
                    <h4 className={"mb-4"}>Popular tracks</h4>
                  </Col>
                </Row>
                <Row className={"mb-5"}>
                  <Col>
                    <ArtistSongs songs={this.state.songs}/>
                  </Col>
                </Row>
                <Row>
                  <Col xs={"auto"}>
                    <h4 className={"mb-4"}>Popular albums</h4>
                  </Col>
                </Row>
                <Row>
                  <ArtistAlbums albums={this.state.albums}/>
                </Row>
              </TabPane>
              <TabPane tabId={"2"}>
                <Row>
                  <Col xs={"auto"}>
                    <h4 className={"mb-4"}>Tracks</h4>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <ArtistSongs songs={this.state.songs}/>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId={"3"}>
                <Row>
                  <Col xs={"auto"}>
                    <h4 className={"mb-4"}>Albums</h4>
                  </Col>
                </Row>
                <Row>
                  <ArtistAlbums albums={this.state.albums}/>
                </Row>
              </TabPane>
              <TabPane tabId={"4"}>
                <span className={"lead"}>There is no info</span>
              </TabPane>
            </TabContent>
          </div>
        </Col>
      </Row>
    );
  }
}

const ArtistInfo = (props) => {
  const artist = props.artist;

  return (
    <Row className={"mb-4"}>
      <Col xs={"3"}>
        {
          artist.id &&
          <img src={"http://localhost:8080/artists/" + artist.id + "/logo"} width={"100%"} alt={"Logo"} className={"rounded shadow"}/>
        }
      </Col>
      <Col>
        <Row>
          <Col>
            <span className={"lead text-muted"}>{"ARTIST"}</span>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className={"display-4 mb-0"}>{artist.name}</h1>
          </Col>
        </Row>
        <hr className={"my-2"}/>
        <Row>
          <Col>
            <Link to={"/genres/" + artist.genre} className={"lead text-muted"}>{artist.genre}</Link>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

const ArtistSongs = (props) => {
  const songs = props.songs;

  return (
    songs.map((value, index) => {
      return (
        <Row key={index} className={"lead p-1 song"}>
          <Col xs={"auto"} style={{ width: "35px" }}>
            {index + 1}
          </Col>
          <Col>
            <Link to={"/"} className={"text-dark"}>{value.name}</Link>
          </Col>
          <Col xs={"1"} className={"ml-auto text-right"}>
            <span>{"3:59"}</span>
          </Col>
        </Row>
      )
    })
  );
};

const ArtistAlbums = (props) => {
  const albums = props.albums;

  return (
    albums.map((value, index) => {
      return (
        <Col xs={"3"} key={index}>
          <Card className={"shadow"}>
            <Link to={"/albums/" + value.id}>
              <CardImg src={"http://localhost:8080/albums/" + value.id + "/cover"}/>
            </Link>
            <CardBody className={"text-center border-top bg-light"}>
              <CardTitle tag={"h6"} className={"mb-0 text-truncate"}>
                <Link to={"/albums/" + value.id} className={"text-dark"}>{value.name}</Link>
              </CardTitle>
              <CardText tag={"small"}>{value.year}</CardText>
            </CardBody>
          </Card>
        </Col>
      )
    })
  );
};
