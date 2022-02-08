import React from 'react';
import './Card.css';
import 'font-awesome/css/font-awesome.min.css';
import Card from './Card.js';
import SkeletonCard from './SkeletonCard.js';
import LoaderIndicator from './LoaderIndicator.js';
import CardColumnHeaders from './CardColumnHeaders.js';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

class JobItemSwiper extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            titles: {
                t1: "Not Started",
                t2: "In Progress",
                t3: "Completed",
                t4: "Delivered",
            }
        };

    }

    componentDidMount() {
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
            titles: this.props.titles
        });

        console.log("::: XXXXX::", this.props)

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

            <div>

             

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

                    {this.props.items.length > 0 ?

                            this.props.items.map((slide, i) => (

                                <SwiperSlide key={"sz-x"+i} id={"sz-x"+i}>

                                    <CardColumnHeaders titles={this.state.titles}  />
                                    <div className="row kanban-tiles-container-row">

                                        <div className="col-3 col-md-3">

                                            { slide.hasOwnProperty("NOT_STARTED") === true &&

                                            Object.values(slide.NOT_STARTED).map((jobItem,h) => (

                                                <Card
                                                    key={"sld-a-"+h}
                                                    object={jobItem}
                                                    state='j-i-1'
                                                    fullname={jobItem.customer_name}
                                                    job={jobItem.job_number}
                                                    description={jobItem.description}
                                                    url={jobItem.id+'/'+jobItem.tenant_id+'/'+jobItem.customer_id+'/'+jobItem.job_number}
                                                    time={jobItem.time_ago}
                                                    escalate={jobItem.is_escalate === '1' || jobItem.is_escalate === 1 || jobItem.is_escalate === true || jobItem.is_escalate === 'true'}
                                                />

                                            ))

                                            }

                                        </div>

                                        <div className="col-3 col-md-3">

                                            { slide.hasOwnProperty("IN_PROGRESS") === true &&

                                            Object.values(slide.IN_PROGRESS).map((jobItem,h) => (

                                                <Card
                                                    key={"sld-b-"+h}
                                                    object={jobItem}
                                                    state='j-i-2'
                                                    fullname={jobItem.customer_name}
                                                    job={jobItem.job_number}
                                                    description={jobItem.description}
                                                    url={jobItem.id+'/'+jobItem.tenant_id+'/'+jobItem.customer_id+'/'+jobItem.job_number}
                                                    time={jobItem.time_ago}
                                                    escalate={jobItem.is_escalate === '1' || jobItem.is_escalate === 1 || jobItem.is_escalate === true || jobItem.is_escalate === 'true'}
                                                />

                                            ))

                                            }

                                        </div>

                                        <div className="col-3 col-md-3">

                                            { slide.hasOwnProperty("COMPLETED") === true && 

                                            Object.values(slide.COMPLETED).map((jobItem,h) => (

                                                <Card
                                                    key={"sld-c-"+h}
                                                    object={jobItem}
                                                    state='j-i-3'
                                                    fullname={jobItem.customer_name}
                                                    job={jobItem.job_number}
                                                    description={jobItem.description}
                                                    url={jobItem.id+'/'+jobItem.tenant_id+'/'+jobItem.customer_id+'/'+jobItem.job_number}
                                                    time={jobItem.time_ago}
                                                    escalate={jobItem.is_escalate === '1' || jobItem.is_escalate === 1 || jobItem.is_escalate === true || jobItem.is_escalate === 'true'}
                                                />

                                            ))

                                            }

                                        </div>

                                        <div className="col-3 col-md-3">

                                            { slide.hasOwnProperty("DELIVERED") === true && 

                                            Object.values(slide.DELIVERED).map((jobItem,h) => (

                                                <Card
                                                    key={"sld-d-"+h}
                                                    object={jobItem}
                                                    state='j-i-4'
                                                    fullname={jobItem.customer_name}
                                                    job={jobItem.job_number}
                                                    description={jobItem.description}
                                                    url={jobItem.id+'/'+jobItem.tenant_id+'/'+jobItem.customer_id+'/'+jobItem.job_number}
                                                    time={jobItem.time_ago}
                                                    date={jobItem.date_updated}
                                                    escalate={jobItem.is_escalate === '1' || jobItem.is_escalate === 1 || jobItem.is_escalate === true || jobItem.is_escalate === 'true'}
                                                />

                                            ))

                                            }

                                        </div>

                                    </div>

                                </SwiperSlide>

                            ))

                        :

                            [1].map(slide => (

                                <div key="szj-0" id="szj-0" className="swiper-slide">

                                    <CardColumnHeaders/>

                                    <div className="row kanban-tiles-container-row">

                                        {[1,2,3,4].map((col,i) => (

                                        <div key={"sk-"+i}  id={"sk-"+i} className="col-3 col-md-3">

                                            {[1, 2, 3].map((skeletonCard,j) => (
                                                <div key={"crd-"+j}  id={"crd-"+j} className="card job-item j-i-0">
                                                    <ul className="list-group list-group-flush  list-group-skeleton">
                                                         <SkeletonCard/>
                                                    </ul>
                                                </div>
                                            ))}

                                        </div>

                                        ))}

                                    </div>

                                </div>

                            ))

                    }

                    </Swiper>


                    <div className="row  kanban-footer-container">

                        <div className="col-4">&nbsp;</div>

                        <div className="col-4  kanban-footer-text-container">

                            <div className="swiper-pagination"></div>

                        </div>

                        <div className="col-4">&nbsp;</div>

                    </div>

                </div>
                

        );

    }

}

export default JobItemSwiper;
