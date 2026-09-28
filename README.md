# 아정당 상조결합 가전 랜딩 v3.5

## Vercel 배포
1. 이 폴더를 GitHub 저장소 루트에 올립니다.
2. Vercel에서 New Project → 저장소 선택
3. Framework Preset: **Other**, Build Command: 비움, Output Directory: 비움(루트)
4. Deploy

CLI로 올릴 경우: 폴더 안에서 `npx vercel --prod`

## 로컬 실행
정적 파일이라 빌드 과정이 없습니다. `npx serve` 등 웹 서버로 열어 주세요.
파일을 더블클릭해 file://로 열면 스크립트 로딩이 막혀 화면이 나오지 않을 수 있습니다.

## 구성
- index.html: 랜딩 페이지
- vercel.json: 배포 설정 (에셋 캐시)
- support.js: 페이지 런타임 (삭제 금지)
- image-slot.js: 이미지 슬롯 컴포넌트
- _ds/: B2C 디자인 시스템 (토큰, 컴포넌트)
- assets/: 이미지 52개, 헤더 영상 hero-video.mp4 (약 12MB)

## 외부 의존성
- Pretendard 폰트, 아이콘: jsDelivr CDN
- Nanum Pen Script 폰트: Google Fonts
