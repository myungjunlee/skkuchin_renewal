import React from 'react';
import { CssBaseline, ThemeProvider, Typography, Container, Divider, Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import Header from '../components/MealPromise/Header';
import theme from '../theme/theme';

const ConsentTable = () => {
    return (
      <div >
        <Typography variant="h6" mb={1} sx={{ fontWeight: 700 }}>개인정보 수집 및 이용 동의서</Typography>
        <Typography variant="body2" mb={2}>‘스꾸친’은 개인정보를 수집∙이용 목적은 다음과 같습니다. 내용을 자세히 확인 후 동의 여부를 결정하여 주시기 바랍니다.</Typography>
        
        <Typography variant="body2" sx={{fontWeight: 800, mb: 1}}>▶ 개인정보 수집∙이용 내역</Typography>
        <TableContainer>
          <Table >
            <TableHead>
              <TableRow>
                <TableCell sx={{width: '30%', p: '10px', backgroundColor: '#F2F2F2', fontWeight: 700}}>수집∙이용 목적</TableCell>
                <TableCell sx={{width: '40%', p: '10px', backgroundColor: '#F2F2F2', fontWeight: 700}}>항목</TableCell>
                <TableCell sx={{width: '30%', p: '10px', backgroundColor: '#F2F2F2', fontWeight: 700}}>보유∙이용기간</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{flex: 1}}>밥약 매칭 서비스 제공</TableCell>
                <TableCell sx={{flex: 1}}>학과, 학번, 아이디, 이메일, 이름, 성별, 전화번호, MBTI, 프로필 사진, 카카오톡 오픈채팅방 URL</TableCell>
                <TableCell sx={{flex: 1}}>회원 탈퇴시까지</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
  
        <Typography variant="body2" sx={{whiteSpace: 'pre-line'}}>
            {`\n자세한 내용은 개인정보처리방침을 확인해주세요.
            *귀하는 위 개인정보 수집∙이용에 대해 동의를 거부할 권리가 있습니다. 그러나 동의를 거부할 경우 서비스 이용이 제한될 수 있습니다.`}
        </Typography>
      </div>
    );
};
  
const paragraphStyle = {
    whiteSpace: 'pre-line',
    fontSize: '14px'
};

const sectionTextStyle = {
    fontWeight: 800,
    fontSize: '16px'
};

const ServiceInfo = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header title="서비스 정보" />

      <Container maxWidth="md" sx={{ mt: '70px', p: '0 20px 50px' }}>
        <Typography variant="h6" mb={1} sx={{ fontWeight: 700 }}>스꾸친 이용약관</Typography>

        <Typography sx={sectionTextStyle}>제1조 (목적)</Typography>
        <Typography paragraph sx={paragraphStyle}>
          ‘스꾸친 서비스 약관(이하 "본 약관")은 이용자가 스꾸친에서 제공하는 인터넷 관련 서비스(이하 "서비스")를 이용함에 있어 이용자와 "“스꾸친” 간의 권리·의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
        </Typography>

        <Typography sx={sectionTextStyle}>제2조 (용어의 정의)</Typography>
        <Typography paragraph sx={paragraphStyle}>
          {`이 약관에서 사용하는 용어의 정의는 다음과 같습니다.
            이용자: “스꾸친”에 접속하여 본 약관에 따라 “스꾸친”이 제공하는 서비스를 받는 회원 및 비회원
            이용계약: 본 약관에 동의하여 “스꾸친”이 제공하는 양식에 따라 서비스의 이용에 관해 “스꾸친”과 이용자 간에 체결하는 계약
            회원: 이용계약을 체결하여 “스꾸친”이 제공하는 서비스를 이용할 수 있는 자
            계정(ID): 회원의 식별과 서비스의 이용을 위하여 회원이 선정하고 “스꾸친”이 승인하는 영문자와 숫자의 조합
            비밀번호: 회원의 정보 보호를 위해 회원이 선정한 영문자와 숫자, 특수문자의 조합
            탈퇴: 회원이 서비스 이용 이후 그 이용계약을 종료시키는 의사표시`}
        </Typography>

        <Typography sx={sectionTextStyle}>제3조 (약관의 효력 및 변경)</Typography>
        <Typography paragraph sx={paragraphStyle}>
          {`이 약관은 서비스를 통하여 이를 공지하거나 이메일, 기타의 방법으로 이용자에게 통지함으로써 효력을 발생합니다.
            “스꾸친”은 정보통신망 이용촉진 및 정보보호 등에 관한 법률, 개인정보보호법, 통신비밀보호법, 전기통신사업법, 등 정보통신서비스제공자가 준수하여야 할 관련 법령상의 개인정보보호 규정을 위반하지 않는 범위에서 이 약관의 내용을 변경할 수 있으며, 변경된 약관은 적용일자 및 개정사유를 명시하여 제1항과 같은 방법으로 공지 또는 통지함으로써 효력을 발생합니다.
            회원은 신설 또는 변경된 약관에 동의하지 않을 경우 회원탈퇴를 요청할 수 있으며, 신설 또는 변경된 약관이 공지된 후 15일 이후에도 회원탈퇴를 요청하지 않고 서비스를 계속 사용할 경우 약관의 신설 또는 변경사항에 동의한 것으로 간주됩니다.`}
        </Typography>

        <Typography sx={sectionTextStyle}>제4조 (약관 이외의 준칙)</Typography>
        <Typography paragraph sx={paragraphStyle}>
            {`이 약관에 명시되지 않은 사항이 전기통신기본법, 전기통신사업법, 기타 관련법령에 규정되어 있는 경우 그 규정에 따릅니다.`}
        </Typography>

        <Typography sx={sectionTextStyle}>제5조 (이용계약의 성립)</Typography>
        <Typography paragraph sx={paragraphStyle}>
            {`이용계약은 서비스이용신청자의 이용신청에 대하여 “스꾸친”이 승낙을 함으로써 성립합니다.`}
        </Typography>

        <Typography sx={sectionTextStyle}>제6조 (이용신청)</Typography>
        <Typography paragraph sx={paragraphStyle}>
            {`서비스 이용신청자는 “스꾸친”이 제공하는 회원가입양식을 작성하여 가입버튼을 누름으로써 이용신청을 할 수 있습니다.
            회원가입양식에 기재하는 모든 정보는 실제 데이터인 것으로 간주됩니다. 실제 정보를 입력하지 않은 이용자는 법적인 보호를 받을 수 없으며, 서비스 이용의 제한을 받을 수 있습니다.
            비회원은 “스꾸친” 서비스를 이용할 수 있지만, 이용 상의 제약이 있을 수 있습니다.`}
        </Typography>

        <Typography sx={sectionTextStyle}>제7조 (이용신청의 승낙)</Typography>
        <Typography paragraph sx={paragraphStyle}>
            {`“스꾸친”은 이용자가 제6조에서 정한 모든 사항을 정확히 기재하여 이용신청을 하였을 떄 특별한 사정이 없는 한 접수순서에 따라서 이용신청을 승낙합니다.
            
            “스꾸친”는 다음 각 호에 해당하는 경우 이용신청에 대한 승낙을 제한할 수 있고, 그 사유가 해소될 때까지 승낙을 유보할 수 있습니다.
            1. 서비스 관련 설비의 용량이 부족한 경우
            2. 기술상 장애사유가 있는 경우
            3. 등록내용에 허위, 기재누락, 오기가 있는 경우
            4. 약관 및 이용규칙을 위반하여 이용자격이 제한된 이용자가 신청한 경우
            5. 기타 “스꾸친”이 필요하다고 인정하는 경우

            “스꾸친”은 다음 각호에 해당하는 이용신청에 대하여 이를 승낙하지 않을 수 있습니다.
            1. 타인의 학교 계정 등 명의를 사칭하여 신청한 경우
            2. 사회의 질서 또는 미풍양속을 저해할 목적으로 신청한 경우
            3. 범죄행위, 스팸광고 등 부정한 목적으로 서비스를 이용하고자 하는 경우
            4. 기타 회원으로 등록하는 것이 “스꾸친”의 운영 상 현저히 지장이 있다고 판단되는 경우`}
        </Typography>

        <Typography sx={sectionTextStyle}>제8조 (계약사항의 변경)</Typography>
        <Typography paragraph sx={paragraphStyle}>
            {`회원은 이용신청 시 기재한 사항이 변경되었을 경우 직접 변경사항을 정정하여야 하며, 수정하지 아니하여 발생하는 문제의 책임은 회원에게 있습니다.
            계정(ID), 성명, 학번 등 회원의 고유한 정보는 변경할 수 없습니다.
            기재된 회원정보가 다음 각 호에 해당하는 경우 회원의 요청 또는 “스꾸친”의 직권으로 서비스의 이용을 제한하거나 정지할 수 있습니다.
            1. 타인의 권리를 침해하는 경우
            2. 타인에게 혐오감을 주거나 미풍양속에 어긋나는 경우
            3. 기타 합리적인 사유가 있는 경우`}
        </Typography>

        <Typography sx={sectionTextStyle}>제9조 (계약의 해지 및 이용제한)</Typography>
        <Typography paragraph sx={paragraphStyle}>
            {`회원은 “스꾸친”에 언제든지 서비스 이용계약의 해지를 요청할 수 있으며, “스꾸친”은 위 요청을 받은 즉시 해당 이용자의 회원 탈퇴를 위한 절차를 진행해야 합니다.
            회원이 서비스 이용계약을 해지하고자 하는 경우에는 본인이 서비스 내 마이페이지를 통하여 회원탈퇴 신청을 하여야 합니다.
            회원 탈퇴 시 작성한 게시물은 삭제됩니다.
            “스꾸친”은 회원이 다음 각 호의 사유에 해당하는 경우, 서비스 이용계약을 해지하거나 서비스의 이용을 제한 또는 정지할 수 있습니다.
            1. 가입 신청 시에 허위 내용을 등록한 경우
            2. 타인의 서비스 이용을 방해하거나 그 정보를 도용하는 등 전자거래질서를 위협하는 경우
            3. 서비스를 이용하며 법령과 본 약관 및 이용규정에서 금지하거나 사회의 질서에 반하는 행위를 하는 경우
            4. “스꾸친”은 제9조 제5항에 의하여 서비스 이용계약을 해지하거나 서비스의 이용을 제한 또는 정지하고자 하는 경우, 회원에게 이를 사전에 통지하고, 소명할 기회를 부여해야 합니다. 다만, 합리적인 이유로 긴급하게 서비스의 이용을 제한 또는 정지할 필요가 있다고 인정되는 경우 통지 없이 진행할 수 있습니다.`}
        </Typography>

        <Typography sx={sectionTextStyle}>제10조 (회원에 대한 통지)</Typography>
        <Typography paragraph sx={paragraphStyle}>
            {`“스꾸친”은 특정 회원에 대해 통지를 하는 경우, 회원이 가입 시 기입한 전화번호 및 이메일로 할 수 있습니다.
            “스꾸친”이 불특정다수의 회원에 대한 통지를 하는 경우 공지사항에 게시함으로써 개별 통지에 갈음할 수 있습니다.`}
        </Typography>

        <Typography sx={sectionTextStyle}>제11조 (서비스의 내용)</Typography>
        <Typography paragraph sx={paragraphStyle}>
            {`“스꾸친”이 회원에게 제공하는 서비스의 내용은 다음과 같습니다.
            1. 성균관대학교 맛집 정보 제공 및 성대생과의 밥약(밥 약속) 서비스
            2. 기타 “스꾸친”이 자체 개발하거나 타 회사와의 제휴 등을 통해 회원들에게 제공하는 일체의 서비스
            “스꾸친”은 필요한 경우 서비스의 내용을 추가 또는 변경할 수 있습니다. 이 경우 “스꾸친”은 추가 또는 변경내용을 회원에게 통지합니다.
            회원이 등록한 게시물은 “스꾸친”이 제공하는 서비스를 통하여 실명으로 공개되며 아이디와 비밀번호를 제외한 회원가입 정보들이 함께 공개됩니다.`}
        </Typography>

        <Typography sx={sectionTextStyle}>제12조 (서비스의 요금)</Typography>
        <Typography paragraph sx={paragraphStyle}>
            {`“스꾸친”이 제공하는 서비스는 무료입니다. 다만 일부 특수 목적의 서비스는 유료로 제공할 수 있으며, 그 자세한 내용에 대하여는 회원과 반드시 합의하여야 합니다.`}
        </Typography>

        <Typography sx={sectionTextStyle}>제13조 (서비스의 개시)</Typography>
        <Typography paragraph sx={paragraphStyle}>
            {`서비스는 “스꾸친”의 서비스상 또는 기술상의 장애로 인하여 서비스를 즉시 개시하지 못하는 경우 “스꾸친”은 회원에게 이를 통지해야 합니다.`}
        </Typography>

        <Typography sx={sectionTextStyle}>제14조 (서비스 이용시간)</Typography>
        <Typography paragraph sx={paragraphStyle}>
            {`서비스는 “스꾸친”의 서비스상 또는 기술상 특별한 사유가 없는 한 연중무휴, 1일 24시간 이용할 수 있습니다. 다만 설비의 점검 등 “스꾸친”이 필요한 경우 또는 설비의 장애, 서비스 이용의 폭주 등 불가항력 사항으로 인하여 서비스 이용에 지장이 있는 경우 예외적으로 서비스 이용의 전부 또는 일부에 대하여 제한할 수 있습니다.
            “스꾸친”은 제공하는 서비스 중 일부에 대한 서비스 이용시간을 별도로 정할 수 있으며, 이 경우 그 이용시간을 사전에 회원에게 공지합니다.`}
        </Typography>

        <Typography sx={sectionTextStyle}>제15조 (정보의 제공 및 광고의 게재)</Typography>
        <Typography paragraph sx={paragraphStyle}>
            {`“스꾸친”은 서비스를 운용함에 있어서 각종 정보를 서비스에 게재하는 방법 등으로 이용자에게 제공할 수 있습니다.
            “스꾸친”은 서비스의 운용과 관련하여 이용자에게 제공하는 서비스 화면, 메일 등에 광고 등을 게재할 수 있습니다.`}
        </Typography>

        <Typography sx={sectionTextStyle}>제16조 (서비스 제공의 중지)</Typography>
        <Typography paragraph sx={paragraphStyle}>
            {`“스꾸친”은 다음 각 호에 해당하는 경우 서비스의 제공을 중지할 수 있습니다.
            1. 설비의 보수 등을 위하여 부득이한 경우
            2. 전기통신사업법에 규정된 기간통신사업자가 전기통신서비스를 중지하는 경우
            3. 기타 설비의 장애, 서비스 이용의 폭주 등 불가항력 사항으로 인하여 “스꾸친”이 서비스를 제공할 수 없는 사유가 발생한 경우.`}
        </Typography>

        <Typography sx={sectionTextStyle}>제17조 (게시물의 게시중단, 이동, 삭제)</Typography>
        <Typography paragraph sx={paragraphStyle}>
            {`“스꾸친”은 이용자가 서비스 내에 게시하는 게시물의 모든 내용이 다음 각 호에 해당한다고 판단될 경우 사전 통보없이 해당 게시물의 게시 중단, 이동, 삭제 등의 조치를 취할 수 있으며, 필요한 경우 해당 이용자의 서비스 이용 자격을 제한, 정지 또는 상실시킬 수 있습니다.
            1. 다른 회원 또는 제3자에 대한 인신공격, 비하, 비방, 욕설, 명예훼손 등의 내용
            2. 다른 회원 또는 제3자의 저작권, 초상권 등 기타 권리를 침해하는 내용
            3. 공서양속에 위반되는 정보, 문장, 도형 등을 유표하는 내용
            4. 범죄행위와 관련된 내용
            5. 기타 관계 법령에 위배된다고 판단되는 내용
            6. 기타 서비스 내의 이용수칙 및 본 약관에 위반되는 내용
            이용자의 게시물로 인한 법률상 이익 침해를 근거로, 다른 회원 또는 제3자가 회원 또는 “스꾸친”을 대상으로 민형사상의 법적 조치를 취하는 동시에 법적 조치와 관련된 게시물의 삭제를 요청해오는 경우, “스꾸친”은 법적 조치의 결과가 있을 때까지 관련 게시물에 대한 접근을 제한할 수 있습니다. 단, 서비스 내에 공개된 게시글이 명백하게 타인 또는 제3자의 권리를 침해한다고 인정하는 경우 통지없이 해당 게시물을 게시중단 할 수 있습니다.`}
        </Typography>

        <Typography sx={sectionTextStyle}>제18조 (“스꾸친”의 의무)</Typography>
        <Typography paragraph sx={paragraphStyle}>
            {`“스꾸친”은 제14조 및 제16조에서 정한 경우를 제외하고 이 약관에서 정한 바에 따라 계속적, 안정적으로 서비스를 제공할 수 있도록 최선의 노력을 다하여야 합니다.
            “스꾸친”은 서비스에 관련된 설비를 항상 운용할 수 있는 상태로 유지 보수하고, 장애가 발생하는 경우 지체없이 이를 수리, 복구할 수 있도록 최선의 노력을 다하여야 합니다.
            “스꾸친”은 서비스와 관련한 회원의 불만사항이 접수되는 경우 이를 즉시 처리하여야 하며, 즉시 처리가 곤란한 경우 그 사유와 처리 일정을 서비스 또는 메일을 통하여 회원에게 통지하여야 합니다.
            “스꾸친”은 회원의 개인 정보를 회원 본인의 승낙 없이 제3자에게 누설하거나 배포하지 않습니다. 단, 전기통신기본법 등 법률의 규정에 의해 국가기관의 요구가 있는 경우, 범죄에 대한 수사상의 목적이 있거나 기타 관계법령에서 정한 절차에 의한 요청이 있는 경우 이에 협조할 수 있습니다.
            “스꾸친”은 이용자가 서비스를 이용함에 있어 “스꾸친”의 고의 또는 중대한 과실로 인하여 입은 손해를 배상할 책임을 부담합니다.`}
        </Typography>

        <Typography sx={sectionTextStyle}>제19조 (개인정보의 보호)</Typography>
        <Typography paragraph sx={paragraphStyle}>
            {`“스꾸친”은 관련법령이 정하는 바에 따라서 서비스와 관련하여 기득한 회원의 개인정보를 보호하기 위해서 노력합니다. 회원의 개인정보 보호에 관해서는 관련법령 및 “스꾸친”의 "개인정보보호정책"에 정한 바에 의합니다.
            “스꾸친”은 이용자의 등록정보를 포함한 이용자의 개인정보를 관리할 의무가 있으며 임의로 이용자의 개인정보를 열람하지 않습니다`}
        </Typography>

        <Typography sx={sectionTextStyle}>제20조 (회원의 의무)</Typography>
        <Typography paragraph sx={paragraphStyle}>
            {`회원은 관계법령, 이 약관의 규정, 이용안내 및 주의사항 등 “스꾸친”이 통지하는 사항을 준수하여야 하며, 기타 “스꾸친”의 서비스에 방해되는 행위를 하여서는 안됩니다.
            회원은 “스꾸친”의 사전 승낙없이 서비스를 이용하여 어떠한 영리행위도 할 수 없습니다.
            회원은 서비스를 이용하여 얻은 정보를 “스꾸친”의 사전 승낙 없이 복사, 복제, 변경, 번역, 출판, 방송, 기타의 방법으로 사용하거나 이를 타인에게 제공할 수 없습니다.
            회원이 작성한 게시물 등에 대한 권리와 책임은 이를 작성한 회원에게 있으며, 등록되는 모든 글과 자료는 서비스 내의 게재권을 갖습니다.

            회원은 서비스 이용과 관련하여 다음 각 호의 행위를 하여서는 안됩니다.
            1. 회원가입신청 또는 변경 시 허위내용을 등록하는 행위
            2. 다른 회원의 아이디(ID)를 부정 사용하는 행위
            3. 한 명의 이용자가 다수의 아이디를 사용하는 행위
            4. 범죄행위를 목적으로 하거나 기타 범죄행위와 관련된 행위
            5. 공서양속을 해하는 행위
            6. 타인의 명예를 훼손하거나 모욕하는 행위
            7. 타인의 지적재산권 등의 권리를 침해하는 행위
            8. 해킹행위 또는 컴퓨터바이러스의 유포행위
            9. 타인의 의사에 반하여 광고성 정보 등 일정한 내용을 지속적으로 전송하는 행위
            10. 서비스의 안전적인 운영 또는 정상적인 이용에 지장을 주거나 줄 우려가 있는 일체의 행위
            11. 서비스를 통해 얻은 정보를 그 정보의 권리자의 동의없이 수집, 복제, 배포하는 행위
            12. 관련 법령에 위배되는 행위
            13. 기타 “스꾸친”이 서비스 운영상 부적절하다고 판단하는 행위`}
        </Typography>

        <Typography sx={sectionTextStyle}>제21조 (회원의 계정(ID) 및 비밀번호에 대한 의무)</Typography>
        <Typography paragraph sx={paragraphStyle}>
            {`“스꾸친”이 관계법령, “개인정보보호정책”에 의해 그 책임을 지는 경우를 제외하고, 회원의 계정(ID) 및 비밀번호에 대한 모든 관리의 책임은 본인에게 있습니다.
            회원의 계정(ID) 및 비밀번호의 관리소홀, 제3자의 사용 등에 의한 손해의 책임은 회원에게 있습니다.
            회원은 자신의 계정(ID) 및 비밀번호가 부정하게 사용되고 있음을 인지한 경우 반드시 “스꾸친”에 이를 통보해야 하며, 관련한 “스꾸친”의 안내가 있는 경우 그를 따라야 합니다.`}
        </Typography>

        <Typography sx={sectionTextStyle}>제22조 (저작권의 귀속 및 이용제한)</Typography>
        <Typography paragraph sx={paragraphStyle}>
            {`“스꾸친”이 작성한 서비스에 관한 저작권 및 기타 지적재산권은 “스꾸친”에 귀속됩니다.
            이용자는 서비스를 이용함으로써 얻은 정보를 “스꾸친”의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 등 기타 방법에 의하여 영리목적으로 이용하거나, 제3자에게 이용하게 하여서는 안됩니다. (단, 이용자가 사적으로 이용하는 경우는 제외합니다.)
            이용자가 작성한 게시물에 대한 모든 권리 및 책임은 이를 게시한 이용자에게 있습니다.
            “스꾸친”이 이용자의 게시물을 이용하고자 하는 경우 쪽지, 이메일 등을 통해 이용자의 동의를 얻어야 합니다.`}
        </Typography>

        <Typography sx={sectionTextStyle}>제23조 (양도금지)</Typography>
        <Typography paragraph sx={paragraphStyle}>
            {`회원은 서비스의 이용권한, 기타 이용계약상 지위를 타인에게 양도, 증여할 수 없으며, 이를 담보로 제공할 수 없습니다.`}
        </Typography>

        <Typography sx={sectionTextStyle}>제24조 (손해배상)</Typography>
        <Typography paragraph sx={paragraphStyle}>
            {`“스꾸친”은 무료로 제공되는 서비스와 관련하여 이용자에게 어떠한 손해가 발생하더라도 동 손해가 “스꾸친”의 중대한 과실에 의한 경우를 제외하고는 이에 대하여 책임을 부담하지 아니합니다.`}
        </Typography>

        <Typography sx={sectionTextStyle}>제25조 (면책)</Typography>
        <Typography paragraph sx={paragraphStyle}>
            {`“스꾸친”은 회원의 채팅 내용을 감시하지 않습니다. 채팅 내용에 대한 책임은 각 회원에게 있습니다. 본 서비스를 이용하여 타인에게 피해를 주거나 미풍양속을 해치는 행위를 하여 발생하는 모든 법적인 책임은 회원에게 있으며, 그 해당 계정(ID)과 관련 데이터는 보호받을 수 없습니다.
            “스꾸친”은 이용자가 서비스에 게재한 정보, 자료, 사실의 정확성, 신뢰성 등 그 내용에 관하여는 어떠한 책임을 부담하지 않고, 이용자는 스스로의 책임 아래 서비스를 이용하며, 서비스를 이용하여 게시 또는 전송한 자료 등에 관하여 손해가 발생하거나 자료의 취사선택, 기타 서비스 이용과 관련하여 어떠한 불이익이 발생하더라도 이에 대한 모든 책임은 이용자에게 있습니다.
            “스꾸친”이 제공하는 정보와 자료는 거래의 목적으로 이용될 수 없습니다. 따라서 본 서비스의 정보와 자료 등에 근거한 거래는 전적으로 이용자 자신의 책임과 판단아래 수행되는 것이며, “스꾸친”은 이용자의 서비스의 이용과 관련하여 기대하는 이익에 관하여 책임을 부담하지 않습니다.
            “스꾸친”이 관계법령, “개인정보보호정책”에 의해 그 책임을 지는 경우를 제외하고 회원의 계정(ID)과 비밀번호의 관리 및 이용상의 부주의로 인하여 발생되는 손해 또는 제3자에 의한 부정사용 등에 대한 책임은 모두 회원에게 있습니다.`}
        </Typography>

        <Typography sx={sectionTextStyle}>제26조 (분쟁의 해결)</Typography>
        <Typography paragraph sx={paragraphStyle}>
            {`“스꾸친”과 이용자 간에 발생한 서비스 이용에 관한 분쟁에 대하여는 대한민국 법을 적용합니다.
            “스꾸친”과 이용자는 서비스와 관련하여 발생한 분쟁을 원만하게 해결하기 위하여 필요한 모든 노력을 하여야 합니다.
            위의 규정에도 불구하고, 동 분쟁으로 인하여 소송이 제기될 경우 동 소송은 “스꾸친”의 본사소재지를 관할하는 대한민국 법원의 관할로 합니다.`}
        </Typography>
        
        <Typography variant="body2" mt={3} sx={{fontWeight: 700}}>
          이용약관 1차 변경일: 2024년 02월 06일
        </Typography>

        <Divider orientation="horizontal" sx={{ my: "25px", border: '5px solid #F2F2F2' }} />

        <Typography variant="h6" mb={1} sx={{ fontWeight: 700 }}>개인정보처리방침</Typography>
        <Typography variant="body2" mb={2}>스꾸친은 개인정보 보호법에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.</Typography>
        
        <Typography sx={sectionTextStyle}>1. 개인정보의 처리 목적</Typography>
        <Typography paragraph sx={paragraphStyle}>
            {`성대생과의 밥약 서비스를 제공하는 스꾸친은 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며 이용 목적이 변경되는 경우에는 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
            (1) 회원가입 및 관리
            회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원자격 유지·관리, 서비스 부정이용 방지, 각종 고지·통지, 고충처리 목적으로 개인정보를 처리합니다.
            (2) 민원사무 처리
            민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락·통지, 처리결과 통보 목적으로 개인정보를 처리합니다.
            (3) 재화 또는 서비스 제공
            서비스 제공, 콘텐츠 제공, 본인인증을 목적으로 개인정보를 처리합니다.
            (4) 마케팅 및 광고에의 활용
            신규 서비스(제품) 개발 및 맞춤 서비스 제공, 이벤트 및 광고성 정보 제공 및 참여기회 제공 , 서비스의 유효성 확인, 접속빈도 파악 또는 회원의 서비스 이용에 대한 통계 등을 목적으로 개인정보를 처리합니다.`}
        </Typography>

        <Typography sx={sectionTextStyle}>2. 개인정보의 처리 및 보유 기간</Typography>
        <Typography paragraph sx={paragraphStyle}>
            {`스꾸친은 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 원활한 서비스 제공을 위해 개인정보를 처리·보유합니다.
            각각의 개인정보 처리 및 보유 기간은 수집.이용에 관한 동의일로부터 탈퇴할 때까지 위 이용목적을 위하여 보유·이용됩니다.
            ※ 예외사유
            불량 이용자의 경우 탈퇴 후 재가입 방지를 위해 1년간 '학번' 및 '이메일'을 보유합니다.`}
        </Typography>

        <Typography sx={sectionTextStyle}>3. 개인정보의 제3자 제공</Typography>
        <Typography paragraph sx={paragraphStyle}>
            {`스꾸친은 개인정보를 개인정보의 처리 목적에서 명시한 범위 내에서만 처리하며, 이용자의 사전 동의 없이 동 범위를 초과하여 제공하지 않습니다.
            아이디, 패스워드를 제외한 회원 정보가 제 3자에게 제공되는 실명 시스템이므로, 다른 이용자나 관리자에게 이름, 성별, 학과, 학번, MBTI, 프로필 사진, 카카오톡 오픈채팅방 URL, 밥약 선호 일정에 관한 정보가 보여지거나 전달됩니다.`}
        </Typography>

        <Typography sx={sectionTextStyle}>4. 개인정보처리 위탁</Typography>
        <Typography paragraph sx={paragraphStyle}>
            {`스꾸친은 보안성 높은 서비스 제공을 위하여, 신뢰도가 검증된 아래 회사에 개인정보 관련 업무 처리를 위탁할 수 있습니다. 이 경우 스꾸친은 회원에게 위탁을 받는 자와 업무의 내용을 사전에 알리고 동의를 받습니다. 위탁을 받는 자 또는 업무의 내용이 변경될 경우에도 같습니다.
            스꾸친은 정보통신서비스의 제공에 관한 계약을 이행하고 회원의 편의 증진 등을 위하여 추가적인 처리 위탁이 필요한 경우에는 고지 및 동의 절차를 거치지 않을 수 있습니다.다음과 같이 개인정보 처리업무를 위탁하고 있습니다.
            (1) Amazon Web Service: 서비스 시스템 제공, 데이터 관리 및 보관, 회원 관리, 운영 시스템 지원
            (2) Google Firebase: 서비스 시스템 제공, 데이터 관리 및 보관, 회원 관리, 운영 시스템 지원`}
        </Typography>

        <Typography sx={sectionTextStyle}>5. 정보주체의 권리·의무 및 그 행사방법</Typography>
        <Typography paragraph sx={paragraphStyle}>
            {`회원은 언제든지 [마이페이지]를 통해 자신의 개인정보를 조회하거나 수정, 삭제, 탈퇴를 할 수 있습니다.`}
        </Typography>

        <Typography sx={sectionTextStyle}>6. 수집하는 개인정보의 항목</Typography>
        <Typography paragraph sx={paragraphStyle}>
            {`스꾸친은 서비스 제공을 위해 아래 목록 중 최소한의 개인정보를 수집합니다.
            개인정보 목록
            학과, 학번, 아이디, 이메일, 이름, 성별, 전화번호, MBTI, 프로필 사진, 카카오톡 오픈채팅방 URL`}
        </Typography>

        <Typography sx={sectionTextStyle}>7. 개인정보의 파기</Typography>
        <Typography paragraph sx={paragraphStyle}>
            {`스꾸친은 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.
            정보주체로부터 동의받은 개인정보 보유기간이 경과하거나 처리목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는, 해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나 보관장소를 달리하여 보존합니다.
            개인정보 파기의 절차 및 방법은 다음과 같습니다.
            (1) 파기절차
            스꾸친은 파기 사유가 발생한 개인정보를 선정하고, 스꾸친의 개인정보 보호책임자의 승인을 받아 개인정보를 파기합니다.
            (2) 파기방법
            전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다`}
        </Typography>

        <Typography sx={sectionTextStyle}>8. 쿠키</Typography>
        <Typography paragraph sx={paragraphStyle}>
            {`쿠키란 웹사이트를 운영하는 데 이용되는 서버가 귀하의 브라우저에 보내는 아주 작은 텍스트 파일로서 귀하의 컴퓨터 하드디스크에 저장됩니다. 서비스는 이용자의 성향 파악을 위해 쿠키를 사용할 수 있습니다.
            쿠키 설정 거부 방법 예시
            1)Microsoft Edge: 웹 브라우저 우측 상단의 설정 > 쿠키 및 사이트 권한
            2)Chrome: 웹 브라우저 우측 상단의 설정 > 개인정보 및 보안 > 쿠키 및 기타 사이트 데이터`}
        </Typography>

        <Typography sx={sectionTextStyle}>9. 개인정보에 관한 책임자 및 서비스</Typography>
        <Typography paragraph sx={paragraphStyle}>
            {`스꾸친은 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보보호 담당 부서를 지정하고 있습니다.
            (1) 개인정보보호 담당 부서 : 스꾸친 관리 위원회
            (2) 스꾸친 관리 위원회 메일 : skkuchin@gmail.com
            ※ 서비스 이용, 접근 제한 등의 문의는 스꾸친 관리 위원회를 통해 처리되지 않습니다. 해당 문의는 [문의하기]를 통해 전달해주시기 바랍니다.
            기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기 바랍니다.
            (1) 개인정보조정위원회 (www.1336.or.kr / 1336)
            (2) 정보보호마크인증위원회 (www.eprivacy.or.kr / 02-580-0533~4)
            (3) 대검찰청 인터넷범죄수사센터 (icic.sppo.go.kr / 02-3480-3600)
            (4) 경찰청 사이버테러대응센터 (www.ctrc.go.kr / 02-392-0330)`}
        </Typography>

        <Typography sx={sectionTextStyle}>10. 기타</Typography>
        <Typography paragraph sx={paragraphStyle}>
            {`이 약관은 2024년 2월 6일에 최신화 되었습니다.
            본 약관의 내용 추가, 삭제 및 수정이 있을 경우 개정 최소 7일 전에 ‘공지사항’을 통해 사전 공지를 할 것입니다. 다만, 수집하는 개인정보의 항목, 이용목적의 변경 등과 같이 회원 권리의 중대한 변경이 발생할 때에는 최소 30일 전에 공지하거나, 동의를 다시 받도록 하겠습니다.`}
        </Typography>

        <Divider orientation="horizontal" sx={{ my: "25px", border: '5px solid #F2F2F2' }} />
        
        <ConsentTable />
        
        </Container>
    </ThemeProvider>
  );
};

export default ServiceInfo;
