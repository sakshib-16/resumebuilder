import classes from './logo.module.css';

export const Logo = () => {
  return (
    <div className={classes.logo}>
      <svg width="35.879421" height="41.525383">
        <g transform="matrix(3.7795276,0,0,3.7795276,-53.920574,-132.09415)">
          <g
            style={{ fill: 'none' }}
            transform="matrix(0.26458333,0,0,0.26458333,14.266485,34.94991)"
          >
            <path
              d="M 14.3843,0 H 28.7686 L 14.3843,21.9189 H 0 Z"
              fill="#1ea5fc"
            />
          </g>
          <g
            style={{ fill: 'none' }}
            id="g133"
            transform="matrix(0.26458333,0,0,0.26458333,16.202156,40.075573)"
          >
            <path
              d="M 14.5217,22.1528 H 0.479847 L 14.5217,0.918869 h 14.0418 z"
              fill="#9bd3f7"
            />
          </g>
        </g>
      </svg>
      <div className={classes.typography}>
        <p className={classes.p1}>Pro</p>
        <p className={classes.p2}>Resume</p>
      </div>
    </div>
  );
};
