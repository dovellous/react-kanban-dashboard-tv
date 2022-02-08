import React from 'react';
import './Card.css';
import 'font-awesome/css/font-awesome.min.css';
import Zone from './Zone.js';
import SkeletonCard2 from './SkeletonCard2.js';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

class ZoneItemSwiper extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            workshops: []
        };

        this.setState({
            workshops: props.workshops.pages
        });

        this.handleViewWorkshopKanban = this.handleViewWorkshopKanban.bind(this);

    }

    componentDidMount() {

        console.log("::: ZONE ITEM SWIPER DID MOUNT ?????::", this.state);

        this.timerID = setInterval(
            () => this.tick(),
            3000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {

        this.setState({
            workshops: this.props.workshops.pages
        });

        console.log("::: ZONE ITEM SWIPER :: WORKSHOPS ::", this.state.workshops.length, this.state.workshops);

    }

    handleViewWorkshopKanban(id) {

        console.log("::: ZONE ITEM SWIPER :: VIEW WORKSHOP KANBAN ---> ID ::", id);

        this.props.viewWorkshops(id);

    }

    reloadSwiperData( swiper ){

        console.warn(":: RELOAD SWIPER DATA ::")

        /*

        const self = this; 

        setTimeout(

            function(){ 

                swiper.destroy(true, true); 

                self.props.refreshReplicationStats(); 

            }, 10000);

        }

        */
    }

    render() {

        return (

             

                <Swiper

                    // install Swiper modules
                    //modules={[Navigation, Pagination, Scrollbar, A11y]}

                    loop={false}
                    loopFillGroupWithBlank={true}
                    //slidesPerView: 4,
                    //slidesPerGroup: 4,
                    spaceBetween={1}
                    centeredSlides={false}
                    direction={'horizontal'}
                    speed={5000}
                    autoplay={{ delay: 15000, disableOnInteraction: true}}
                    //pagination={{ el: ".swiper-pagination", clickable: true, }}

                    spaceBetween={0}
                    slidesPerView={1}
                    //navigation
                    //pagination={{ clickable: true }}
                    //scrollbar={{ draggable: true }}
                    onReachEnd={(swiper) => this.reloadSwiperData(swiper)}
                >

                    {this.state.workshops.length > 0 ?

                            this.state.workshops.map((slide, i) => (

                                <SwiperSlide key={"sz-x"+i} id={"sz-x"+i}>

                                    <div className="row kanban-tiles-container-row">

                                        {Object.values(slide).map((zoneItem, j) => (

                                            <div
                                                id={"wkc-"+j} key={"wkc-"+j}
                                                className="col-3 col-md-3"
                                                style={{border: "none", marginTop: "20px"}}
                                                onClick={(e) => this.handleViewWorkshopKanban(zoneItem.id)}>

                                                <Zone
                                                    object={zoneItem}
                                                    zone_name={zoneItem.name}
                                                    zone_id={zoneItem.zone_id}
                                                    tenant_id={zoneItem.tenant_id}
                                                    in_progress_label={zoneItem.zone.in_progress_label}
                                                    in_progress_value={zoneItem.wip}
                                                    sla_breaches_label={zoneItem.zone.sla_breaches_label}
                                                    sla_breaches_value={zoneItem.sla}
                                                    branches_label={zoneItem.zone.branches_label}

                                                />

                                            </div>

                                        ))}

                                    </div>

                                </SwiperSlide>

                            ))

                        :

                            [1].map(slide => (

                                <SwiperSlide key="szw-0" id="szw-0" className="swiper-slide">
                                
                                    <div className="row kanban-tiles-container-row">

                                        {[1,2,3,4].map((col, i) => (

                                        <div key={"wks-skd-div-"+i}  id={"wks-skd-div-"+i} className="col-3 col-md-3" style={{border: "none", marginTop: "20px"}}>

                                            {[1, 2, 3].map((skeletonCard, i) => (
                                                <div key={"wks-skd-"+i}  id={"wks-skd-"+i} className="card job-item j-i-0">
                                                    <ul className="list-group list-group-flush  list-group-skeleton">
                                                         <SkeletonCard2/>
                                                    </ul>
                                                </div>
                                            ))}

                                        </div>

                                        ))}

                                    </div>

                                </SwiperSlide>

                            ))

                    }

                    </Swiper> 

        );

    }

}

export default ZoneItemSwiper;
