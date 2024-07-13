"use client";

import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import {
  BarLoader,
  BeatLoader,
  BounceLoader,
  CircleLoader,
  ClockLoader,
  DotLoader,
  FadeLoader,
  GridLoader,
  HashLoader,
  MoonLoader,
  PacmanLoader,
  PropagateLoader,
  PuffLoader,
  PulseLoader,
  RingLoader,
  RiseLoader,
  RotateLoader,
  ScaleLoader,
  SkewLoader,
  SquareLoader,
  SyncLoader,
} from "react-spinners";

const SpinnerPackage = (props) => {
  // let [loading, setLoading] = useState(true);
  const { color, size, loading, speedMultiplier, typeSpinner } = props;

  return (
    <div className="sweet-loading">
      {
        {
          ClipLoader: (
            <ClipLoader
              color={color}
              size={size}
              loading={loading}
              speedMultiplier={speedMultiplier}
            />
          ),
          BarLoader: (
            <BarLoader
              color={color}
              size={size}
              loading={loading}
              speedMultiplier={speedMultiplier}
            />
          ),
          BeatLoader: (
            <BeatLoader
              color={color}
              size={size}
              loading={loading}
              speedMultiplier={speedMultiplier}
            />
          ),
          BounceLoader: (
            <BounceLoader
              color={color}
              size={size}
              loading={loading}
              speedMultiplier={speedMultiplier}
            />
          ),
          CircleLoader: (
            <CircleLoader
              color={color}
              size={size}
              loading={loading}
              speedMultiplier={speedMultiplier}
            />
          ),
          ClockLoader: (
            <ClockLoader
              color={color}
              size={size}
              loading={loading}
              speedMultiplier={speedMultiplier}
            />
          ),
          DotLoader: (
            <DotLoader
              color={color}
              size={size}
              loading={loading}
              speedMultiplier={speedMultiplier}
            />
          ),
          FadeLoader: (
            <FadeLoader
              color={color}
              size={size}
              loading={loading}
              speedMultiplier={speedMultiplier}
            />
          ),
          GridLoader: (
            <GridLoader
              color={color}
              size={size}
              loading={loading}
              speedMultiplier={speedMultiplier}
            />
          ),
          HashLoader: (
            <HashLoader
              color={color}
              size={size}
              loading={loading}
              speedMultiplier={speedMultiplier}
            />
          ),
          MoonLoader: (
            <MoonLoader
              color={color}
              size={size}
              loading={loading}
              speedMultiplier={speedMultiplier}
            />
          ),
          PacmanLoader: (
            <PacmanLoader
              color={color}
              size={size}
              loading={loading}
              speedMultiplier={speedMultiplier}
            />
          ),
          PropagateLoader: (
            <PropagateLoader
              color={color}
              size={size}
              loading={loading}
              speedMultiplier={speedMultiplier}
            />
          ),
          PuffLoader: (
            <PuffLoader
              color={color}
              size={size}
              loading={loading}
              speedMultiplier={speedMultiplier}
            />
          ),
          PulseLoader: (
            <PulseLoader
              color={color}
              size={size}
              loading={loading}
              speedMultiplier={speedMultiplier}
            />
          ),
          RingLoader: (
            <RingLoader
              color={color}
              size={size}
              loading={loading}
              speedMultiplier={speedMultiplier}
            />
          ),
          RiseLoader: (
            <RiseLoader
              color={color}
              size={size}
              loading={loading}
              speedMultiplier={speedMultiplier}
            />
          ),
          RotateLoader: (
            <RotateLoader
              color={color}
              size={size}
              loading={loading}
              speedMultiplier={speedMultiplier}
            />
          ),
          ScaleLoader: (
            <ScaleLoader
              color={color}
              size={size}
              loading={loading}
              speedMultiplier={speedMultiplier}
            />
          ),
          SkewLoader: (
            <SkewLoader
              color={color}
              size={size}
              loading={loading}
              speedMultiplier={speedMultiplier}
            />
          ),
          SquareLoader: (
            <SquareLoader
              color={color}
              size={size}
              loading={loading}
              speedMultiplier={speedMultiplier}
            />
          ),
          SyncLoader: (
            <SyncLoader
              color={color}
              size={size}
              loading={loading}
              speedMultiplier={speedMultiplier}
            />
          ),
        }[typeSpinner]
      }
    </div>
  );
};

export default SpinnerPackage;
