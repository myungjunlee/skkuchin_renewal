import Image from 'next/image';

// MBTI 캐릭터
import INTP from '../../image/mbti/profile/INTP.png';
import INTJ from '../../image/mbti/profile/INTJ.png';
import INFJ from '../../image/mbti/profile/INFJ.png';
import INFP from '../../image/mbti/profile/INFP.png';
import ISFJ from '../../image/mbti/profile/ISFJ.png';
import ISFP from '../../image/mbti/profile/ISFP.png';
import ISTJ from '../../image/mbti/profile/ISTJ.png';
import ISTP from '../../image/mbti/profile/ISTP.png';
import ESTJ from '../../image/mbti/profile/ESTJ.png';
import ESTP from '../../image/mbti/profile/ESTP.png';
import ESFJ from '../../image/mbti/profile/ESFJ.png';
import ESFP from '../../image/mbti/profile/ESFP.png';
import ENFJ from '../../image/mbti/profile/ENFJ.png';
import ENFP from '../../image/mbti/profile/ENFP.png';
import ENTJ from '../../image/mbti/profile/ENTJ.png';
import ENTP from '../../image/mbti/profile/ENTP.png';

export const displayMBTI= (mbti) => {
    const imageWidth = 140;
    const imageHeight = 140;

    switch(mbti) {
        case "INTP":
            return <Image id={"INTP"} src={INTP} width={140} height={140} placeholder="blur" layout='fixed' />
        case "INTJ":
            return <Image id={"INTJ"} src={INTJ} width={imageWidth} height={imageHeight} placeholder="blur" layout='fixed' />
        case "INFP":
            return <Image id={"INFP"} src={INFP} width={imageWidth} height={imageHeight} placeholder="blur" layout='fixed' />
        case "INFJ":
            return <Image id={"INFJ"} src={INFJ} width={imageWidth} height={imageHeight} placeholder="blur" layout='fixed' />
        case "ISFP":
            return <Image id={"ISFP"} src={ISFP} width={imageWidth} height={imageHeight} placeholder="blur" layout='fixed' />
        case "ISFJ":
            return <Image id={"ISFJ"} src={ISFJ} width={imageWidth} height={imageHeight} placeholder="blur" layout='fixed' />
        case "ISTP":
            return <Image id={"ISTP"} src={ISTP} width={imageWidth} height={imageHeight} placeholder="blur" layout='fixed' />
        case "ISTJ":
            return <Image id={"ISTJ"} src={ISTJ} width={imageWidth} height={imageHeight} placeholder="blur" layout='fixed' />
        case "ESTJ":
            return <Image id={"ESTJ"} src={ESTJ} width={imageWidth} height={imageHeight} placeholder="blur" layout='fixed' />
        case "ENTP":
            return <Image id={"ENTP"} src={ENTP} width={imageWidth} height={imageHeight} placeholder="blur" layout='fixed' />
        case "ENTJ":
            return <Image id={"ENTJ"} src={ENTJ} width={imageWidth} height={imageHeight} placeholder="blur" layout='fixed' />
        case "ENFP":
            return <Image id={"ENFP"} src={ENFP} width={imageWidth} height={imageHeight} placeholder="blur" layout='fixed' />
        case "ENFJ":
            return <Image id={"ENFJ"} src={ENFJ} width={imageWidth} height={imageHeight} placeholder="blur" layout='fixed' />
        case "ESFP":
            return <Image id={"ESFP"} src={ESFP} width={imageWidth} height={imageHeight} placeholder="blur" layout='fixed' />
        case "ESFJ":
            return <Image id={"ESFJ"} src={ESFJ} width={imageWidth} height={imageHeight} placeholder="blur" layout='fixed' />
        case "ESTP":
             return <Image id={"ESTP"} src={ESTP} width={imageWidth} height={imageHeight} placeholder="blur" layout='fixed' />
        case "ESTJ":
            return <Image id={"ESTJ"} src={ESTJ} width={imageWidth} height={imageHeight} placeholder="blur" layout='fixed' />
        default:
            return null;
    }
}
