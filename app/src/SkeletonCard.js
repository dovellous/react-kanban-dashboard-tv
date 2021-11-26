import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonCard = (props) => (
    <ContentLoader
        speed={1}
        width={583}
        height={331}
        viewBox="0 0 583 331"
        backgroundColor="#dfdfdf"
        foregroundColor="#ffffff"
        {...props}
    >
        <path d="M 139 45 h 336 c 4 0 8 2 8 5 v 8 c 0 3 -4 5 -8 5 H 139 c -4 0 -8 -2 -8 -5 v -8 c 0 -3 4 -5 8 -5 z M 63 33 c 22 0 39 17 39 39 s -17 39 -39 39 s -39 -17 -39 -39 s 17 -39 39 -39 z M 25 258 c -1 0 -1 0 -1 -1 s 1 -1 1 -1 h 531 c 1 0 1 0 1 1 l -1 1 H 25 z m 0 -131 c -1 0 -1 0 -1 -1 l 1 -1 h 531 c 1 0 1 0 1 1 s -1 1 -1 1 H 25 z m 4 154 h 16 c 3 0 5 2 5 4 v 12 c 0 2 -2 4 -5 4 H 29 c -3 0 -5 -2 -5 -4 v -12 c 0 -2 2 -4 5 -4 z m 374 0 h 150 c 3 0 5 2 5 4 v 12 c 0 2 -2 4 -5 4 H 403 c -3 0 -5 -2 -5 -4 v -12 c 0 -2 2 -4 5 -4 z m -42 0 h 16 c 3 0 5 2 5 4 v 12 c 0 2 -2 4 -5 4 h -16 c -3 0 -5 -2 -5 -4 v -12 c 0 -2 2 -4 5 -4 z m -290 0 h 150 c 3 0 5 2 5 4 v 12 c 0 2 -2 4 -5 4 H 71 c -3 0 -5 -2 -5 -4 v -12 c 0 -2 2 -4 5 -4 z M 31 149 h 452 c 4 0 7 2 7 5 v 8 c 0 3 -3 5 -7 5 H 31 c -4 0 -7 -2 -7 -5 v -8 c 0 -3 3 -5 7 -5 z m 0 67 h 343 c 4 0 7 2 7 5 v 8 c 0 3 -3 5 -7 5 H 31 c -4 0 -7 -2 -7 -5 v -8 c 0 -3 3 -5 7 -5 z m 0 -34 h 343 c 4 0 7 2 7 5 v 9 c 0 3 -3 5 -7 5 H 31 c -4 0 -7 -2 -7 -5 v -9 c 0 -3 3 -5 7 -5 z M 529 46 h 16 c 3 0 5 2 5 4 v 12 c 0 2 -2 4 -5 4 h -16 c -3 0 -5 -2 -5 -4 V 50 c 0 -2 2 -4 5 -4 z M 138 80 h 253 c 4 0 8 2 8 5 v 9 c 0 3 -4 5 -8 5 H 138 c -4 0 -8 -2 -8 -5 v -9 c 0 -3 4 -5 8 -5 z" />
    </ContentLoader>
)

export default SkeletonCard

