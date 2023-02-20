import React from 'react';
import styled from 'styled-components';
import parse from 'html-react-parser';

const Preview = ({data, content}) => {
    return (
        <Container>
            <div>
                <div className='info'>
                    <h4>{data.tags.join(" ")}</h4>
                    <h1>{data.title}</h1>
                    <h4>{data.date}</h4>
                </div>
                <div className='content'>
                    {parse(content.content)}
                </div>
            </div>
        </Container>
    );
}

export default Preview;


const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  background: #f5f4f4;
  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 1rem;
    h1 {
        font-size: 2rem;
        position: relative;
        &::after {
            content: "";
            position: absolute;
            bottom: -0.5rem;
            left: 0;
            width: 50%;
            height: 2px;
            background: #0d0d0d;
        }
    }
    h4 {
        font-size: 1rem;
        color: #616161;
    }
  }
  .content {
    > * + * {
      margin-top: 0.75em;
    }
    outline: none;
    margin: 0 1rem;
    ul,
    ol {
      padding: 0 1rem;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      line-height: 1.1;
    }
    code {
      background-color: rgba(#616161, 0.1);
      color: #616161;
    }
    pre {
      background: #0d0d0d;
      color: #fff;
      font-family: "JetBrainsMono", monospace;
      padding: 0.75rem 1rem;
      border-radius: 0.5rem;
      code {
        color: inherit;
        padding: 0;
        background: none;
        font-size: 0.8rem;
      }
    }
    img {
      display: block;
      width: 85%;
      height: 85%;
      margin-left: auto;
      margin-right: auto;
      border-radius: 0.5rem;
      object-fit: cover;
    }
    blockquote {
      padding-left: 1rem;
      border-left: 2px solid rgba(#0d0d0d, 0.1);
    }
    hr {
      border: none;
      border-top: 2px solid rgba(#0d0d0d, 0.1);
      margin: 2rem 0;
    }
  }

`;


