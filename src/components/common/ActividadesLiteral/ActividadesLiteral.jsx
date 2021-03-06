import * as React from "react"

function ActividadesLiteral(props) {
  return (
    <svg
      width={512.044}
      height={122.021}
      viewBox="-6.022 13.989 512.044 122.021"
      style={{
        background: "0 0",
      }}
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <defs>
        <filter id="prefix__editing-extrude-glow">
          <feFlood floodColor="#4fff15" result="flood-1" />
          <feMorphology radius={1} in="SourceAlpha" result="erode" />
          <feComposite operator="in" in="flood-1" in2="erode" result="comp1" />
          <feConvolveMatrix
            order="3,3"
            divisor={1}
            in="comp1"
            result="convolve"
            kernelMatrix="0 0 0 1 1 1 0 0 0"
          />
          <feOffset dx={-3} in="convolve" result="extrude" />
          <feComposite
            operator="in"
            in="flood-1"
            in2="extrude"
            result="comp-extrude"
          />
          <feFlood floodColor="#000" result="flood-2" />
          <feComposite
            operator="in"
            in="flood-2"
            in2="SourceAlpha"
            result="comp2"
          />
          <feMorphology
            operator="dilate"
            radius={1}
            in="comp2"
            result="dilate"
          />
          <feOffset dx={-4.5} in="dilate" result="offset" />
          <feGaussianBlur in="offset" stdDeviation={5.8} result="blur" />
          <feComponentTransfer in="blur" result="shadow">
            <feFuncA type="linear" slope={0.8} intercept={-0.2} />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="comp-extrude" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#prefix__editing-extrude-glow)">
        <path
          d="M100.716 100.272q-8.19 0-8.96-11.65h-11q-1.28 2.95-2.18 5.51l-1.66 4.86h-8.96l20.16-42.24h13.76l2.68 31.1q.64 6.72 3.2 8.71-1.85 3.71-7.04 3.71zm-14.46-24.45l-3.52 8.13h8.83l-.77-16.45v-1.73l-4.54 10.05zm56.64-3.45q0 2.68-2.24 4.35-2.24 1.66-5.89 1.66-1.53 0-2.43-.45.7-1.66.93-3.74.22-2.08.22-2.66 0-2.68-1.85-2.68-1.28 0-2.72 1.6-1.44 1.6-2.66 4.09-2.69 5.76-2.69 11.59 0 3.2 1.22 4.64 1.21 1.44 3.9 1.44 3.71 0 6.66-3.08.83-.96 1.28-2.04 2.43 1.28 2.43 4.8 0 3.58-3.97 5.95-4.09 2.43-10.62 2.43-12.99 0-12.99-13.76 0-10.05 5.69-15.81 5.51-5.63 15.62-5.63t10.11 7.3zm2.75 20.22q0-1.73.9-6.08l3.39-17.28h-3.78l.26-1.92q7.68-2.3 15.1-7.94h3.08l-1.54 6.98h4.99l-.57 2.88h-4.93l-3.27 17.28q-.83 3.97-.83 5.31 0 3.07 2.69 3.71-.64 2.18-2.94 3.46-2.31 1.28-5.57 1.28-3.27 0-5.12-2.05-1.86-2.05-1.86-5.63zm37.44 2.88q-1.98 4.8-8.32 4.8-3.26 0-5.31-2.24-1.73-1.98-1.73-3.97 0-5.18 2.37-15.29l2.37-12.42 12.99-1.28-3.9 20.22q-1.09 4.74-1.09 6.4 0 3.65 2.62 3.78zm-9.47-38.02q0-2.49 2.08-3.84 2.08-1.34 5.09-1.34t4.83 1.34q1.82 1.35 1.82 3.84 0 2.5-2.01 3.78-2.02 1.28-5.03 1.28-3 0-4.89-1.28-1.89-1.28-1.89-3.78zm38.14 9.99q2.12-2.37 5.76-2.37 2.24 0 3.97 1.22 1.73 1.21 1.73 3.48 0 2.28-.7 4.71-.71 2.43-1.8 4.93-2.17 4.86-5.18 8.89-4.22 5.83-8.29 8.9-4.06 3.07-8.48 3.07-3.58 0-5.76-.83-.38-13.44-.86-18.24-.48-4.8-.87-7.43-.64-5.12-2.56-6.33 1.48-1.28 2.92-1.83 1.44-.54 4.41-.54 2.98 0 5.09 2.34 2.11 2.33 2.53 6.46.41 4.13.41 9.12 0 4.99-.38 11.01 1.98-1.41 4.1-5.7 2.88-5.95 3.9-13.12.32-2.17.32-4.48 0-2.3-.26-3.26zm28.55 28.03q-1.99 4.8-8.32 4.8-3.27 0-5.31-2.24-1.73-1.98-1.73-3.97 0-5.18 2.37-15.29l2.36-12.42 13-1.28-3.91 20.22q-1.09 4.74-1.09 6.4 0 3.65 2.63 3.78zm-9.47-38.02q0-2.49 2.08-3.84 2.08-1.34 5.08-1.34 3.01 0 4.84 1.34 1.82 1.35 1.82 3.84 0 2.5-2.02 3.78-2.01 1.28-5.02 1.28t-4.9-1.28q-1.88-1.28-1.88-3.78zm35.07 7.62q2.3 0 4.09.51.07-.25.2-.96l.32-1.98q.25-1.28.64-3.39l1.02-5.06 12.74-1.28-7.11 37.12q-.06.38-.06 1.02v1.03q0 1.41.7 2.46.71 1.06 1.86 1.06-1.28 3.01-5.19 4.29-1.34.38-3.23.38t-3.61-.99q-1.73-.99-2.24-2.66-1.03 1.67-3.08 2.66-2.04.99-5.02.99-2.98 0-5.44-.77-2.46-.77-4-2.43-2.82-3.26-2.82-10.69 0-9.6 5.64-15.42 5.63-5.89 14.59-5.89zm-.45 3.84q-2.37 0-3.65 2.56-1.28 2.56-2.59 8.9-1.31 6.33-1.31 12.03 0 3.9 2.3 3.9 2.05 0 3.49-2.05 1.44-2.04 2.02-5.44l3.45-18.75q-1.34-1.15-3.71-1.15zm23.07 28.16q-1.5-1.66-2.17-4.29-.68-2.62-.68-6.91t1.48-8.19q1.47-3.91 4.16-6.72 5.5-5.89 14.59-5.89 3.26 0 5.63 1.09l10.94-1.09-4.73 24.96q-.19.77-.19 2.18 0 1.4.86 2.3.86.9 2.14 1.02-.64 2.18-2.97 3.46-2.34 1.28-4.96 1.28-2.63 0-4.39-.99-1.76-.99-2.27-2.66-1.02 1.6-3.2 2.63-2.17 1.02-5.09 1.02-2.91 0-5.28-.77-2.36-.77-3.87-2.43zm13.51-25.98q-.74 1.15-1.38 3.1-.64 1.95-1.7 7.17-1.05 5.21-1.05 8.93 0 3.71.57 4.8.58 1.08 1.6 1.08 2.05 0 3.56-1.95 1.5-1.95 2.08-5.41l3.39-18.75q-1.35-1.15-2.91-1.15-1.57 0-2.5.51-.93.51-1.66 1.67zm43.8-6.02q2.31 0 4.1.51.06-.25.19-.96l.32-1.98q.26-1.28.64-3.39l1.03-5.06 12.73-1.28-7.1 37.12q-.07.38-.07 1.02v1.03q0 1.41.71 2.46.7 1.06 1.85 1.06-1.28 3.01-5.18 4.29-1.34.38-3.23.38t-3.62-.99q-1.73-.99-2.24-2.66-1.02 1.67-3.07 2.66-2.05.99-5.02.99-2.98 0-5.44-.77-2.47-.77-4-2.43-2.82-3.26-2.82-10.69 0-9.6 5.63-15.42 5.63-5.89 14.59-5.89zm-.44 3.84q-2.37 0-3.65 2.56-1.28 2.56-2.59 8.9-1.32 6.33-1.32 12.03 0 3.9 2.31 3.9 2.05 0 3.49-2.05 1.44-2.04 2.01-5.44l3.46-18.75q-1.35-1.15-3.71-1.15zm46.2 19.26q1.6 1.09 1.6 3.49 0 2.4-1.21 3.94-1.22 1.53-3.2 2.56-4.1 2.11-8.51 2.11-4.42 0-7.01-.96t-4.32-2.75q-3.39-3.39-3.39-9.6 0-9.67 5.24-15.55 5.64-6.34 15.43-6.34 6.08 0 9.09 2.56 2.24 1.92 2.24 5.06 0 11.26-19.46 11.26-.26 1.66-.26 3.07 0 2.95 1.32 4.07 1.31 1.12 3.74 1.12t5.02-1.12q2.6-1.12 3.68-2.92zm-13.05-6.97q4.54 0 7.17-2.82 2.62-2.69 2.62-6.97 0-1.48-.54-2.28-.55-.8-1.64-.8-1.08 0-2.01.42-.93.42-1.89 1.82-2.37 3.2-3.71 10.63zm40.32-4.67q.89-2.37.89-4.42 0-3.78-3.07-3.78-1.6 0-2.91 1.44t-1.31 3.24q0 1.28 1.02 2.3 1.47 1.41 5.25 3.71 3.78 2.31 5.22 4.19 1.44 1.89 1.44 4.48 0 2.6-1.25 4.96-1.25 2.37-3.49 4.04-4.8 3.58-12.48 3.58-4.16 0-7.36-2.18-3.2-2.11-3.2-4.6 0-2.5 1.82-3.97 1.83-1.47 4.52-1.47 2.68 0 4.35 1.02-.83 2.11-.83 3.52 0 4.22 3.58 4.22 1.54 0 2.56-.96t1.02-2.62q0-3.26-5.5-6.72-4.48-2.94-5.5-4.1-1.73-2.04-1.73-4.6 0-2.56 1.21-5 1.22-2.43 3.46-4.16 4.67-3.58 12.8-3.58 4.16 0 6.62 1.66 2.47 1.67 2.47 4.48 0 2.82-1.7 4.42-1.69 1.6-4.77 1.6-2.11 0-3.13-.7z"
          fill="#009ad0"
        />
      </g>
      <style />
    </svg>
  )
}

export default ActividadesLiteral
