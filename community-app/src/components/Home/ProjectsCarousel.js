import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';
import PropTypes from 'prop-types';

let items = [];

class ProjectsCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  componentDidUpdate() {

  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    const { activeIndex } = this.state;
    if (this.animating) return;
    const nextIndex = activeIndex === this.items.length - 1 ? 0 : activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    const { activeIndex } = this.state;
    if (this.animating) return;
    const nextIndex = activeIndex === 0 ? this.items.length - 1 : activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { projects } = this.props;

    if (projects != null) {
      this.items = Object.entries(projects).map((project, i) => (
        {
          key: i,
          src: project.slice(1)[0].images.slice(1, 2)[0].imageLink,
          altText: ''.concat('Slide ', (i + 1)),
          caption: ''.concat('Slide ', (i + 1)),
        }));
      const { activeIndex } = this.state;

      const slides = this.items.map(item => (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.key}
        >
          <img src={item.src} alt={item.altText} />
        </CarouselItem>
      ));
      return (
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators
            items={this.items}
            activeIndex={activeIndex}
            onClickHandler={this.goToIndex}
          />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      );
    }
    return (
      <p>Loading</p>
    );
  }
}


ProjectsCarousel.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default ProjectsCarousel;
