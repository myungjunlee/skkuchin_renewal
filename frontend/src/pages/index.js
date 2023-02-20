
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react"; 
import { search_places } from "../actions/place/place";
import Layout from "../hocs/Layout";
import Map from "../components/Map";
import Image from 'next/image';
import Link from 'next/link';
import { CssBaseline, Box, ThemeProvider,Slide, Card, CardContent, Typography, Grid, Container, useMediaQuery } from '@mui/material';
import theme from '../theme/theme';
import line from '../image/Line1.png';
import food from '../image/food.png';
import star from '../image/Star-1.png';
import mapIcon from '../image/map-1.png';
import closeIcon from '../image/close.png';
import bookmarkOn from '../image/bookmark-1.png';
import SearchBox from "../components/SearchBox";
import TagList from "../components/TagList";
import { displayTagImage, displayReviewTag } from "../components/TagList";
import { clear_search_results } from "../actions/place/place";
// 상단바
import UpperBar from "../components/UpperBar"

export default function list(){
    const isSmallScreen = useMediaQuery('(max-width: 420px)');

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    const dispatch = useDispatch();
    const router = useRouter();
    // 장소 정보 불러오기
    const place = useSelector(state => state.place.searchplace);
    const favorites = useSelector(state => state.favorite.favorite);
    const user = useSelector(state => state.auth.user);
    
    //상태
    const [height, setHeight] = useState('0');
    const [cardStyle, setCardStyle] = useState({
        radius: '30px 30px 0px 0px',
        cardVisibility: 'visible',
        iconVisibility: 'visible',
        bool: 'false',
    }) ;
    const [numOfLi, setNumOfLi] = useState(0);
    const [open, setOpen] = useState({
        bool:false,
        visibility: 'hidden',
    });
    const [preventScroll, setPreventScroll] = useState(''); //스크롤 방지
    const [keyword, setKeyword] = useState(''); //태그검색
    const [tags, setTags] = useState([]); // 태그 2개까지

    const [tagsId, setTagsId] = useState([
        {id: '학생 할인', exclusiveGroup: null},
        {id: '스페셜', exclusiveGroup: null},
        {id: '한식', exclusiveGroup: 'cuisine'},
        {id: '양식', exclusiveGroup: 'cuisine'},
        {id: '중식', exclusiveGroup: 'cuisine'},
        {id: '일식', exclusiveGroup: 'cuisine'},
        {id: '기타', exclusiveGroup: 'cuisine'},
        {id: '간단한 한 끼', exclusiveGroup: null},
        {id: '분위기 좋은', exclusiveGroup: null},
        {id: '맛집', exclusiveGroup: null},
        {id: '친절', exclusiveGroup: null},
        {id: '가성비', exclusiveGroup: null},
        {id: '청결도', exclusiveGroup: null},
        {id: '둘이 가요', exclusiveGroup: null},
    ]);

    // key props warning 해러 필요
    const tagName = tagsId.map(tag => tag.id);

    const [filteredPlace, setFilteredPlace] =useState([]);
    const [focus, setFocus] = useState();

    const cardRef = useRef(null);
    const animationDuration = '0.3s';
    const animationTimingFunction = 'ease-out';

    if(typeof window !== 'undefined' && !isAuthenticated){
        router.push('/login');
    }
    
    //뒤로가기에서 drawer 열어두기 위하여
    const {openID} = router.query;

    //캠퍼스 필터링
    useEffect(() => {
        if (place && keyword != '' && user.toggle != null) {
          setFilteredPlace(place.filter((item) => item.campus === user.toggle));
        } else {
            if(tags != null) setFilteredPlace(null);
        }
    }, [place, user]);


    useEffect(() => {
        // 0-2 검색 결과 목록 -> 1 목록보기
        if(router.query.keyword != undefined && router.query.keyword != '') {
            setKeyword(router.query.keyword);

            if(tagName.includes(router.query.keyword))
                tags.push(router.query.keyword);
            router.query.keyword = '';
        }
        if (dispatch && dispatch !== null && dispatch !== undefined) {
            if(keyword == '') {
                setFilteredPlace(null);
            } else {
                // 키워드 확인
                dispatch(search_places(keyword));
                if((open.bool) == false) {
                    setHeight('32%');
                    setCardStyle({
                        radius: '30px 30px 0px 0px',
                        cardVisibility: 'visible',
                        iconVisibility: 'visible'
                    });
                }
            }
        }
    }, [keyword, router.query.keyword, dispatch, tags,user]);
    
    
    // 사용자 터치에 따라 카드 사이즈 변화
    useEffect(() => {
        if (cardRef.current) {
            cardRef.current.addEventListener("touchmove", handleTouchMove);
        }
        return () => {
            if (cardRef.current) {
                cardRef.current.removeEventListener("touchmove", handleTouchMove);
            }
        };
      }, [cardRef]);
    

    //li 개수를 반환: (li 개수 * 높이)를 계산하여, 리스트 개수가 적을 경우 계속 스크롤 하여 여백이 생기지 않도록 설정하기 위함
    useEffect(() => {
        if(filteredPlace) {
            setNumOfLi(filteredPlace.length);
        }
    }, [filteredPlace]);

    // 카드 리셋 
    const handleReset = () => {
        setCardStyle({cardVisibility:'hidden'});
        setOpen({ bool:false,
            visibility:'hidden'});
        setHeight('0');
        setPreventScroll('');
        
    }

    // 카드 터치 했을 때 변화
    let preNewHeight = 0;
    const handleTouchMove = (event) => {
        event.preventDefault();

        const WINDOW_HEIGHT = window.innerHeight;
        const TARGET_HEIGHT = WINDOW_HEIGHT * 0.61;
        if(WINDOW_HEIGHT > 1000){
            TARGET_HEIGHT = WINDOW_HEIGHT*0.62;
        }
        const newHeight = window.innerHeight - event.touches[0].clientY;
        if (newHeight >= preNewHeight) {
            // console.log(newHeight);
            // console.log(TARGET_HEIGHT);
            setHeight(TARGET_HEIGHT);
            setOpen({
                bool: true,
                visibility: 'visible'
            });
            setCardStyle({
                radius:'0px',
                iconVisibility:'hidden'
            });
            setPreventScroll('scroll');
        } else {
            
            setHeight('32%');
            setOpen({
                bool: false,
                visibility: 'hidden'
            });
            setCardStyle({
                radius:'30px 30px 0px 0px',
                iconVisibility:'visible'
            });
            setPreventScroll('');
        }
        preNewHeight=newHeight;
    };

    // 아이콘 클릭했을 때 이벤트
    const handleIconOnclick = (event) =>{
        if(event.target.name == 'map' ){
            setOpen({ bool:false,
                Visibility:'hidden'});
            setHeight('32%');
            setCardStyle({
                radius:'30px 30px 0px 0px',
                iconVisibility: 'visible'
            });
            setPreventScroll('');
            cardRef.current.scrollTo({top:0, behavior:'smooth'});
        } else{
            setKeyword('');
            setTags([]);
            handleReset();
        }
    };

    //북마크 기능
    const isFavorite = (placeId) => {
        if(favorites){
        const favorite = favorites.some(favorite => favorite.place_id === placeId)
        if(favorite){
            return <Image width={15} height={15} src={bookmarkOn}/>
        }
        return null;
    }
    };

    //place 페이지로 넘어가는
    const handleLiClick = (e) => {
        e.preventDefault();
      };
    // 헤더영역 태그 해제
    const handleTagClick = (e) => {
        e.preventDefault();

        const clickedTag = e.target.id;
        const remainingTags = tags.filter(tag => tag !== clickedTag);
      
        if (remainingTags.length === 0) {
            setKeyword('');
            setTags([]);
            handleReset();
        } else {
            setTags(remainingTags);
            setKeyword(remainingTags.join(', '));
        }
      }
    
    const onTagClick = (id) => {
        const selectedTag = tagsId.find(tag => tag.id === id);
        if (!selectedTag) return;
      
        const exclusiveGroup = selectedTag.exclusiveGroup;
        let newTags;
      
        if (tags.includes(id)) {
          newTags = tags.filter(tag => tag !== id);
        } else {
          // exclusiveGroup 내의 태그 중 하나가 이미 선택된 경우 첫 번째 태그를 선택해제
          if (exclusiveGroup && tags.some(tag => tagsId.find(t => t.id === tag)?.exclusiveGroup === exclusiveGroup)) {
            const firstTagInExclusiveGroup = tags.find(tag => tagsId.find(t => t.id === tag)?.exclusiveGroup === exclusiveGroup);
            newTags = tags.filter(tag => tag !== firstTagInExclusiveGroup).concat(id);
          } else {
            // 2개 이상 선택되지 않도록 조건 추가
            if (tags.length >= 2) {
              const firstSelected = tags[0];
              if (tagsId.find(tag => tag.id === firstSelected)?.exclusiveGroup === exclusiveGroup
                && exclusiveGroup === selectedTag.exclusiveGroup) {
                newTags = tags.filter(tag => tag !== firstSelected).concat(id);
              } else {
                newTags = tags.filter(tag => tag !== firstSelected).concat(id);
              }
            } else {
              newTags = tags.concat(id);
            }
          }
        }
      
        setTags(newTags);
        setKeyword(newTags.join(', '));
        if(newTags.length == 0) handleReset();
      }
      
    
    // //드로워가 열리거나 검색창에 포커스 잡혔을 때
    const handleFocus = (bool) => {
        setFocus(bool);
        if(bool) {
            setKeyword('');
            setTags([]);
            setFilteredPlace(null);
            setHeight('0');
            // dispatch(search_places('!'))
            dispatch(clear_search_results());
        }
        
    }


    return(
    <ThemeProvider theme={theme}>
      <CssBaseline />
       <Layout>
            <UpperBar />
            <div style={{ position: 'relative', height:'100%', width:'100%',overflow: 'hidden'}}>  
            <Container style={{position:'absolute', padding:'0px', zIndex:'3', width:'100%'}} >
                <SearchBox openID={openID} handleFocus={handleFocus}/> 
                <div style={{position:'relative', width:'100%'}}>
                    <TagList keyword={keyword} onTagClick={onTagClick} />  
                </div>
            </Container> 
             {/* 태그 목록 */}
            
            <Map latitude={37.58622450673971} longitude={126.99709024757782} places={filteredPlace} />
             
            <Slide direction="up" in={open.bool} timeout={1} >
                <Container fixed style={{padding: '0px 16px 0px 0px',}}>
                    <Card style={{
                    position: 'absolute',
                    top: '0px',
                    width: '100%',
                    height: '56.43px',
                    zIndex: '4',
                    boxShadow: '0px 10px 20px -10px rgb(0,0,0, 0.16)',
                    visibility: open.visibility,
                    overflowY:'hidden',
                    border: '1px solid transparent',
                    borderRadius: '0px'
                    }} 
                    
                    >
                        <Grid container style={{padding:'10px 15px 0px 15px'}}>
                            <Grid item style={{padding: '0px 10px 0px 0px'}}>
                            <Image src={mapIcon} width={37} height={36} onClick={handleIconOnclick} name='map' />
                            </Grid>
                            <Grid item xs>
                                <Grid container>
                                    {
                                        tags != null ?
                                        <Grid item onClick={handleTagClick}>
                                            {displayTagImage(tags)}
                                        </Grid>
                                        : null
                                    }
                                </Grid>
                            </Grid>
                            <Grid item >
                            <Image src={closeIcon} width={36} height={36} onClick={handleIconOnclick} name='close'/>
                            </Grid>
                        </Grid>
                    </Card>
                </Container>
            </Slide>
            <Container style={{padding: '13px 16px 0px 0px'}} >
                <Card style={{
                borderRadius: cardStyle.radius,
                position: 'absolute',
                bottom: '0px',
                width: '100%',
                height: height,
                overflowY: preventScroll,
                zIndex: '3',
                boxShadow: '0px -10px 20px -5px rgb(0,0,0, 0.16)',
                visibility: cardStyle.cardVisibility,
                transition: `height ${animationDuration} ${animationTimingFunction}`,
                border: '1px solid transparent',
                
                }} 
                ref = {cardRef}
                 >
                <div>
                    {
                        !open.bool ?
                    <div style={{textAlign:'center', paddingTop:'8px', visibility:cardStyle.iconVisibility}}>
                        <Image width={70} height={4} src={line} /> 
                    </div>
                    : null
                    }
                    <ul style={{listStyleType: "none", padding: '0px 18px 0px 18px', margin: '0px'}} >
                        {filteredPlace? filteredPlace.map((item) => (
                                <li key={item.id} data={item} style={{borderBottom: '1px solid #D9D9D9'}} onClick={handleLiClick}>
                                    <Link href={`/place?id=${item.id}`} key={item.id}>
                                    <Grid container style={{margin: '10px 0px 0px 0px'}}>
                                        <Grid item xs >
                                            <CardContent style={{padding:'0px'}}>
                                                <Grid container spacing={2} style={{margin:'0px',}}>
                                                    <Grid item style={{marginTop:'15px',  padding:'0px 8px 0px 0px'}}>
                                                        <Typography sx={{fontSize: '18px', fontWeight:'500', lineHeight: '28px'}} color="#000000">
                                                            {item.name}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item style={{padding:'0px 8px 0px 0px', whiteSpace: "normal", display: 'flex' }}>
                                                        {isSmallScreen && item.name.length >=13 ?
                                                        <Typography sx={{fontSize: '10px', fontWeight: '500'}} style={{marginTop:'5px'}} color="#a1a1a1" component="div" >
                                                            {item.detail_category}
                                                        </Typography>
                                                        : 
                                                        <Typography sx={{fontSize: '10px', fontWeight: '500'}} style={{marginTop:'22px'}} color="#a1a1a1" component="div" >
                                                            {item.detail_category}
                                                        </Typography>
                                                        }
                                                        <Grid item sx={{mt: isSmallScreen && item.name.length >=13 ? '2px' : '19px', p: '0px 5px'}}>{isFavorite(item.id)}</Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item container style={{marginTop: '10px'}}>
                                                    <Grid >
                                                        <Typography  sx={{fontSize: '10px', fontWeight:'400', marginTop:'2px'}}  color="#505050" component="div">
                                                        스꾸친 평점 :
                                                        </Typography>
                                                    </Grid>
                                                    <Grid style={{margin:'0px 7px 0px 7px'}}>
                                                        <Image width={15} height={14} src={star}/>
                                                    </Grid>
                                                    <Grid >
                                                        <Typography  sx={{fontSize: '10px', fontWeight:'700', marginTop:'3px'}} color="#505050" component="div">
                                                        {item.rate}
                                                        </Typography>
                                                    </Grid >
                                                    <Grid style={{margin:'0px 7px 0px 0px'}}>
                                                        <Typography  sx={{fontSize: '10px', fontWeight:'400', marginTop:'3px'}} color="#A1A1A1" component="div">
                                                        /5
                                                        </Typography>
                                                    </Grid>
                                                    <Grid style={{margin:'0px 7px 0px 0px'}}>
                                                        <Typography  sx={{fontSize: '10px', fontWeight:'400', marginTop:'3px'}} color="#505050" component="div">
                                                        |
                                                        </Typography>
                                                    </Grid>
                                                    <Grid style={{margin:'0px 3px 0px 0px'}}>
                                                        <Typography  sx={{fontSize: '10px', fontWeight:'400', marginTop:'3px'}} color="#505050" component="div">
                                                        스꾸리뷰
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs>
                                                        <Typography  sx={{fontSize: '10px', fontWeight:'700', marginTop:'3px'}} color="#505050" component="div">
                                                        {item.review_count}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                                <Grid container style={{marginTop: '6px'}}>
                                                    <Grid style={{margin:'0px 3px 0px 0px'}}>
                                                        <Typography  sx={{fontSize: '10px', fontWeight:'400'}} color="#505050" component="div">
                                                        위치 : {item.gate}   
                                                        </Typography>
                                                    </Grid>
                                                    <Grid >
                                                        <Typography  sx={{fontSize: '10px', fontWeight:'400'}} color="#a1a1a1" component="div">
                                                        ({item.address})
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                                
                                                <Grid container>
                                                    {/* 태그 받아오기 */}
                                                    {item.tags.map((tag, index) => (
                                                        <Grid sx={{padding: "5px 5px 10px 0px"}} key={index}>
                                                            {displayReviewTag(tag)}
                                                        </Grid>
                                                    ))}
                                                </Grid>
                                            </CardContent>
                                        </Grid>
                                        <Grid style={{margin: '10px 0px 10px 16px'}}>
                                            <Image
                                            width= {98} height= {98}
                                            alt={item.name} 
                                            src={ item.images && item.images.length > 0 ? item.images[0] : food }
                                            style={{borderRadius: '10px'}}/> 
                                        </Grid>
                                    </Grid>
                                    </Link>
                                </li>
                        )) : null }
                        </ul>
                    </div>
                </Card>
            </Container> 
            </div>
        </Layout>
    </ThemeProvider>
    )
}
