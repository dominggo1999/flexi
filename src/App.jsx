import React from 'react';
import { Container, Row, Col } from './shared/Flexi';
import 'twin.macro';
import { getConfiguration } from './shared/Flexi/config';

const App = () => {
  return (
    <>
      <Container tw="text-2xl text-center text-indigo-50">
        <Row
          tw="gap-y-4 my-5"
        >
          <Col tw="w-1/3">
            <div tw="h-52 bg-navy">1</div>
          </Col>
          <Col tw="w-1/3">
            <div tw="h-52 bg-navy">2</div>
          </Col>
          <Col tw="w-1/3">
            <div tw="h-52 bg-navy">3</div>
          </Col>
        </Row>
        <Row tw="gap-y-4">
          <Col tw="w-full md:w-1/3">
            <div tw="h-72 bg-navy">1</div>
          </Col>
          <Col tw="w-full md:w-2/3">
            <Row>
              <Col tw="w-1/3">
                <div tw="h-72 bg-navy">2</div>
              </Col>
              <Col tw="w-1/3">
                <div tw="h-72 bg-navy">3</div>
              </Col>
              <Col tw="w-1/3">
                <div tw="h-72 bg-navy">4</div>
              </Col>
            </Row>
          </Col>
          <Col>
            <div tw="h-20 bg-navy">5</div>
          </Col>
          <Col tw="w-1/2">
            <div tw="h-48 bg-navy">7</div>
          </Col>
          <Col tw="w-1/2">
            <div tw="h-48 bg-navy">8</div>
          </Col>
        </Row>
        <div tw="text-black my-10 text-left text-lg">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla totam quos, sed enim recusandae aut quia natus tempora neque tenetur, nesciunt dolorem dolores necessitatibus molestiae quas ut quasi fuga corrupti ipsum facere at iste. Unde illo totam provident officia possimus corporis molestias quos rerum vitae eveniet accusamus optio dolorem saepe placeat, dolorum quam porro sit illum exercitationem et tempore architecto commodi. Nihil expedita dignissimos magnam necessitatibus ea iste labore deleniti voluptatum voluptatibus quas, itaque dolorem eius quos dolorum incidunt delectus impedit eum consequatur quis nulla maiores dicta. Ullam necessitatibus minima quam facere ad nisi iste fugit quos aperiam optio. Fugit?</p>
        </div>
      </Container>
    </>
  );
};

export default App;
