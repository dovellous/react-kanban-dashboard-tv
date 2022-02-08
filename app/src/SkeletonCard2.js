import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonCard2 = (props) => (
    <ContentLoader
        speed={1}
        width={197}
        height={118}
        viewBox="0 0 197 118"
        backgroundColor="#dfdfdf"
        foregroundColor="#ffffff"
        {...props}
    >
        <path d="M -0.18 74.25 H 200.18 v 1.22 h -99.57 v 42.67 h -1.22 V 75.47 H -0.18 v -1.22 z m 130.46 7.31 h 37.39 v 19.51 h -37.39 V 81.56 z m 14.02 24.55 h 28.65 v 6.34 H 144.3 v -6.34 z m -19.31 0 h 15.04 v 6.34 h -15.04 v -6.34 z M 34.36 81.56 h 37.39 v 19.51 H 34.36 V 81.56 z m 22.66 24.55 h 21.24 v 6.34 H 57.02 v -6.34 z m -10.26 0 h 6.7 v 6.34 h -6.7 v -6.34 z m -17.68 0 h 13.41 v 6.34 H 29.08 v -6.34 z m 37.8 -55.68 h 66.24 v 8.58 H 66.88 v -8.58 z M 32.53 24.66 h 134.94 v 17.48 H 32.53 V 24.66 z" />
    </ContentLoader>
)

export default SkeletonCard2

