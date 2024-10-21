'use client'

import { ReactNode } from "react";
import styles from "./styles.module.scss";
import styled, { css } from "styled-components";
import classNames from "classnames";

interface IWrapperProps {
  $maxWidth?: number;
  $maxHeight?: number;
  $minWidth?: number;
  $minHeight?: number;
  $viewportRange?: {
    min?: number,
    max?: number
  },
  $styles?: React.CSSProperties
}

interface IPhotoFrameProps extends IWrapperProps {
  children: ReactNode;
}

const ImgWrapper = styled.div<IWrapperProps>`
  ${props => css`
      width: clamp(${props.$minWidth || 200}px, 100%, ${props.$maxWidth || 470}px);
      height: clamp(${props.$minHeight || 200}px, 100%, ${props.$maxHeight || 470}px);
  `}
  ${props => props.$viewportRange?.min && css`
      @media(max-width: ${props.$viewportRange?.min}px) {
        display: none;
      }
  `}
  ${props => props.$viewportRange?.max && css`
      @media(min-width: ${props.$viewportRange?.max}px) {
        display: none;
      }
  `}
`;

const PhotoFrame = ({ children, ...wrapperProps }: IPhotoFrameProps) => {
  return (
    <ImgWrapper {...wrapperProps} className={classNames(styles["img-wrapper"], "photo-frame")} style={wrapperProps.$styles}>
      {children}
      <div className={styles["border"]}></div>
    </ImgWrapper>
  )
}

export default PhotoFrame;