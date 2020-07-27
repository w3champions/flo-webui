export function Spinner() {
  return (
    <span className="spinner">
      <span className="rect1"></span>
      <span className="rect2"></span>
      <span className="rect3"></span>
      <span className="rect4"></span>
      <span className="rect5"></span>
      <style jsx>{`
        span {
          display: inline-block;
        }
        .spinner {
          width: 30px;
          height: 20px;
          text-align: center;
          font-size: 10px;
        }

        .spinner > span {
          background-color: #d9dbf1;
          height: 100%;
          width: 3px;
          margin: 0 1px;
          display: inline-block;

          -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
          animation: sk-stretchdelay 1.2s infinite ease-in-out;
        }

        .spinner .rect2 {
          -webkit-animation-delay: -1.1s;
          animation-delay: -1.1s;
        }

        .spinner .rect3 {
          -webkit-animation-delay: -1s;
          animation-delay: -1s;
        }

        .spinner .rect4 {
          -webkit-animation-delay: -0.9s;
          animation-delay: -0.9s;
        }

        .spinner .rect5 {
          -webkit-animation-delay: -0.8s;
          animation-delay: -0.8s;
        }

        @-webkit-keyframes sk-stretchdelay {
          0%,
          40%,
          100% {
            -webkit-transform: scaleY(0.4);
          }
          20% {
            -webkit-transform: scaleY(1);
          }
        }

        @keyframes sk-stretchdelay {
          0%,
          40%,
          100% {
            transform: scaleY(0.4);
            -webkit-transform: scaleY(0.4);
          }
          20% {
            transform: scaleY(1);
            -webkit-transform: scaleY(1);
          }
        }
      `}</style>
    </span>
  );
}
