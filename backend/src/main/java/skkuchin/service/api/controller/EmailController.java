package skkuchin.service.api.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;
import skkuchin.service.dto.CMRespDto;
import skkuchin.service.dto.EmailAuthRequestDto;
import skkuchin.service.dto.UserDto;
import skkuchin.service.exception.CustomValidationApiException;
import skkuchin.service.service.EmailService;

import javax.mail.MessagingException;
import javax.validation.Valid;
import java.io.UnsupportedEncodingException;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/email")
public class EmailController {
    private final EmailService emailService;

    @PostMapping("/signup")
    public ResponseEntity<?> sendEmail(@Valid @RequestBody UserDto.EmailRequest dto, BindingResult bindingResult) {
        Map<String, String> errorMap = new HashMap<>();
        try {
            if (bindingResult.hasErrors()) {
                for (FieldError error : bindingResult.getFieldErrors()) {
                    errorMap.put(error.getField(), error.getDefaultMessage());
                }
                throw new CustomValidationApiException("이메일을 입력해주시기 바랍니다", errorMap);
            }
            emailService.sendEmail(dto);
            return new ResponseEntity<>(new CMRespDto<>(1, "인증 메일이 발송되었습니다", null), HttpStatus.CREATED);
        } catch (MessagingException e) {
            throw new RuntimeException(e);
        } catch (UnsupportedEncodingException e) {
            throw new RuntimeException(e);
        }
    }

    @GetMapping("/confirm/signup")
    public ResponseEntity<String> signupConfirm(@ModelAttribute EmailAuthRequestDto requestDto) {
        return ResponseEntity.ok().body(emailService.confirmSignup(requestDto));
    }

    @PostMapping("/signup/check")
    public ResponseEntity<?> checkSignup(@RequestBody Map<String, String> usernameMap) {
        emailService.checkSignup(usernameMap.get("username"));
        return new ResponseEntity<>(new CMRespDto<>(1, "회원가입 이메일 인증 완료", true), HttpStatus.OK);
    }

    @PostMapping("/password")
    public ResponseEntity<?> sendResetEmail(@RequestBody Map<String, String> emailMap) throws MessagingException, UnsupportedEncodingException {
        emailService.sendResetEmail(emailMap.get("email"));
        return new ResponseEntity<>(new CMRespDto<>(1, "인증 메일이 발송되었습니다", null), HttpStatus.CREATED);
    }

    @GetMapping("/confirm/password")
    public ResponseEntity<String> passwordConfirm(@ModelAttribute EmailAuthRequestDto requestDto) {
        return ResponseEntity.ok().body(emailService.confirmPassword(requestDto));
    }

    @PostMapping("/password/check")
    public ResponseEntity<?> checkPassword(@RequestBody Map<String, String> emailMap) {
        emailService.checkPassword(emailMap.get("email"));
        return new ResponseEntity<>(new CMRespDto<>(1, "비밀번호 초기화 이메일 인증 완료", true), HttpStatus.OK);
    }
}
