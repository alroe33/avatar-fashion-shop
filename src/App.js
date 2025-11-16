import React, { useState } from 'react';
import { Heart, ShoppingCart, User, Search, Menu, Home, Bell, UserCircle } from 'lucide-react';

const AvatarFashionShop = () => {
  const [currentPage, setCurrentPage] = useState('login');
  const [favorites, setFavorites] = useState([]);
  const [avatar, setAvatar] = useState({
    height: 170,
    weight: 65,
    shoulderWidth: 45,
    armLength: 60,
    chestSize: 95,
    waistSize: 80,
    hipCircumference: 95,
    inseam: 75,
    thighCircumference: 55,
    calfCircumference: 35
  });
  const [isAvatarSaved, setIsAvatarSaved] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const products = [
    { id: 1, name: 'LEATHERS SLACKER', price: 119500, image: '👟', rating: 4.5 },
    { id: 2, name: 'LEATHERS SLACKER', price: 119500, image: '👟', rating: 4.8 },
    { id: 3, name: 'LEATHERS SLACKER', price: 119500, image: '👟', rating: 4.6 },
    { id: 4, name: 'LEATHERS SLACKER', price: 119500, image: '👟', rating: 4.7 },
    { id: 5, name: 'LEATHERS SLACKER', price: 119500, image: '👟', rating: 4.9 },
    { id: 6, name: 'LEATHERS SLACKER', price: 119500, image: '👟', rating: 4.4 },
  ];

  // 로그인 화면
  const LoginScreen = () => (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-2">플랫플명</h1>
        <p className="text-center text-sm text-gray-600 mb-8">슬 로 건</p>
        
        <input 
          type="text" 
          placeholder="아이디"
          className="w-full p-3 mb-3 border border-gray-300 rounded-lg"
        />
        <input 
          type="password" 
          placeholder="비밀번호"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
        />
        
        <button 
          onClick={() => setCurrentPage('home')}
          className="w-full bg-black text-white py-3 rounded-lg mb-4 hover:bg-gray-800 transition"
        >
          로그인
        </button>
        
        <div className="flex justify-center gap-4 text-sm text-gray-600 mb-6">
          <button className="hover:text-black">아이디 찾기</button>
          <span>|</span>
          <button className="hover:text-black">비밀번호 찾기</button>
        </div>
        
        <div className="flex justify-center gap-4 mb-6">
          <button className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">N</button>
          <button className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-white font-bold">G</button>
          <button className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-white font-bold">K</button>
        </div>

        <div className="text-center">
          <button 
            onClick={() => setCurrentPage('signup')}
            className="text-sm text-gray-600 hover:text-black"
          >
            회원가입
          </button>
        </div>
      </div>
    </div>
  );

  // 회원가입 화면
  const SignupScreen = () => (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 mt-8">
        <button onClick={() => setCurrentPage('login')} className="mb-4 text-xl">&lt;</button>
        <h1 className="text-2xl font-bold mb-6">회원가입</h1>
        
        <div className="space-y-4">
          <div>
            <label className="block mb-2 font-semibold">이름</label>
            <input type="text" placeholder="이름" className="w-full p-3 border rounded-lg" />
          </div>
          
          <div>
            <label className="block mb-2 font-semibold">생년월일</label>
            <input type="text" placeholder="YY-MM-DD" className="w-full p-3 border rounded-lg" />
          </div>
          
          <div>
            <label className="block mb-2 font-semibold">휴대전화</label>
            <div className="flex gap-2">
              <input type="text" placeholder="휴대전화 번호" className="flex-1 p-3 border rounded-lg" />
              <button className="px-6 bg-black text-white rounded-lg hover:bg-gray-800 transition whitespace-nowrap">인증</button>
            </div>
          </div>
          
          <div>
            <label className="block mb-2 font-semibold">주소</label>
            <div className="flex gap-2 mb-2">
              <input type="text" placeholder="우편번호" className="flex-1 p-3 border rounded-lg" />
              <button className="px-4 bg-black text-white rounded-lg hover:bg-gray-800 transition whitespace-nowrap">주소 검색</button>
            </div>
            <input type="text" placeholder="상세 주소" className="w-full p-3 border rounded-lg" />
          </div>
          
          <div>
            <label className="block mb-2 font-semibold">이메일</label>
            <div className="flex gap-2 items-center">
              <input type="text" className="flex-1 p-3 border rounded-lg" />
              <span className="text-gray-600">@</span>
              <select className="flex-1 p-3 border rounded-lg">
                <option>GOOGLE.COM</option>
                <option>NAVER.COM</option>
                <option>DAUM.NET</option>
              </select>
            </div>
          </div>
          
          <div>
            <label className="block mb-2 font-semibold">비밀번호</label>
            <input type="password" placeholder="영문, 숫자, 특수문자 포함 8자 이상" className="w-full p-3 border rounded-lg" />
          </div>
          
          <div>
            <label className="block mb-2 font-semibold">성별</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input type="radio" name="gender" />
                <span>남</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="gender" />
                <span>여</span>
              </label>
            </div>
          </div>
        </div>
        
        <button 
          onClick={() => setCurrentPage('home')}
          className="w-full bg-black text-white py-4 rounded-lg mt-8 hover:bg-gray-800 transition font-semibold"
        >
          가입하기
        </button>
      </div>
    </div>
  );

  // 홈 화면
  const HomeScreen = () => (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-4">
      {/* 헤더 */}
      <header className="bg-black text-white p-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="md:hidden">
              <Menu size={24} />
            </button>
            <h1 className="text-xl font-bold">MURINSA 🙂</h1>
          </div>
          <div className="flex-1 max-w-2xl mx-4 hidden md:block">
            <div className="relative">
              <input 
                type="text" 
                placeholder="검색어를 입력하세요"
                className="w-full p-3 rounded-lg text-black"
              />
              <Search className="absolute right-3 top-3 text-gray-400" size={20} />
            </div>
          </div>
          <div className="flex gap-4">
            <button onClick={() => setCurrentPage('mypage')}>
              <User size={24} />
            </button>
            <button onClick={() => setCurrentPage('cart')}>
              <ShoppingCart size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <div className="max-w-7xl mx-auto p-4">
        {/* 필터 버튼 */}
        <div className="mb-6 flex gap-4 overflow-x-auto pb-2">
          <button className="px-4 py-2 bg-white rounded-full shadow whitespace-nowrap hover:shadow-md transition">남성 ∨</button>
          <button className="px-4 py-2 bg-white rounded-full shadow whitespace-nowrap hover:shadow-md transition">랭킹 ∨</button>
        </div>

        {/* 상품 카테고리 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <button className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <div className="text-5xl mb-2">👕</div>
            <div className="font-semibold text-lg">상의</div>
          </button>
          <button className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <div className="text-5xl mb-2">👖</div>
            <div className="font-semibold text-lg">하의</div>
          </button>
          <button className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <div className="text-5xl mb-2">👟</div>
            <div className="font-semibold text-lg">신발</div>
          </button>
          <button className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <div className="text-5xl mb-2">🧢</div>
            <div className="font-semibold text-lg">악세서리</div>
          </button>
        </div>

        {/* 상품 그리드 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow overflow-hidden hover:shadow-xl transition cursor-pointer">
              <div className="aspect-square bg-gray-100 flex items-center justify-center text-6xl">
                {product.image}
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-1 text-sm">{product.name}</h3>
                <div className="flex items-center gap-1 mb-2">
                  <span className="text-yellow-500">★</span>
                  <span className="text-sm">{product.rating}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-red-600 font-bold">{product.price.toLocaleString()}원</span>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      if (favorites.includes(product.id)) {
                        setFavorites(favorites.filter(id => id !== product.id));
                      } else {
                        setFavorites([...favorites, product.id]);
                      }
                    }}
                    className={favorites.includes(product.id) ? 'text-red-500' : 'text-gray-400'}
                  >
                    <Heart size={20} fill={favorites.includes(product.id) ? 'currentColor' : 'none'} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 하단 네비게이션 (모바일) */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg md:hidden">
        <div className="flex justify-around p-4">
          <button 
            onClick={() => setCurrentPage('home')}
            className="flex flex-col items-center gap-1"
          >
            <Home size={24} className={currentPage === 'home' ? 'text-black' : ''} />
            <span className={`text-xs ${currentPage === 'home' ? 'font-semibold' : ''}`}>홈</span>
          </button>
          <button 
            onClick={() => setCurrentPage('avatar')}
            className="flex flex-col items-center gap-1"
          >
            <UserCircle size={24} className={currentPage === 'avatar' ? 'text-black' : ''} />
            <span className={`text-xs ${currentPage === 'avatar' ? 'font-semibold' : ''}`}>아바타</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <Bell size={24} />
            <span className="text-xs">알림</span>
          </button>
          <button 
            onClick={() => setCurrentPage('favorites')}
            className="flex flex-col items-center gap-1"
          >
            <Heart size={24} className={currentPage === 'favorites' ? 'text-black' : ''} />
            <span className={`text-xs ${currentPage === 'favorites' ? 'font-semibold' : ''}`}>찜</span>
          </button>
          <button 
            onClick={() => setCurrentPage('mypage')}
            className="flex flex-col items-center gap-1"
          >
            <User size={24} className={currentPage === 'mypage' ? 'text-black' : ''} />
            <span className={`text-xs ${currentPage === 'mypage' ? 'font-semibold' : ''}`}>마이</span>
          </button>
        </div>
      </nav>
    </div>
  );

  // 아바타 생성 화면
  const AvatarScreen = () => (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* 헤더 */}
      <header className="bg-white p-4 shadow sticky top-0 z-10">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button onClick={() => setCurrentPage('home')} className="text-xl">&lt;</button>
          <h1 className="text-xl font-bold">아바타</h1>
          <div className="w-6"></div>
        </div>
      </header>

      <div className="max-w-md mx-auto p-4">
        {/* 아바타 프리뷰 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="bg-gray-50 rounded-xl p-8 flex items-center justify-center" style={{minHeight: '300px'}}>
            <div className="text-8xl">🧍</div>
          </div>
          
          {/* 슬라이더 섹션 */}
          <div className="mt-6 space-y-4">
            {/* 키 */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold">키</label>
                <span className="text-sm text-gray-600">{avatar.height} cm</span>
              </div>
              <input 
                type="range" 
                min="140" 
                max="200" 
                value={avatar.height}
                onChange={(e) => setAvatar({...avatar, height: parseInt(e.target.value)})}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
              />
            </div>

            {/* 몸무게 */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold">몸무게</label>
                <span className="text-sm text-gray-600">{avatar.weight} kg</span>
              </div>
              <input 
                type="range" 
                min="40" 
                max="120" 
                value={avatar.weight}
                onChange={(e) => setAvatar({...avatar, weight: parseInt(e.target.value)})}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
              />
            </div>

            {/* 어깨 너비 */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold">어깨 너비</label>
                <span className="text-sm text-gray-600">{avatar.shoulderWidth} cm</span>
              </div>
              <input 
                type="range" 
                min="35" 
                max="55" 
                value={avatar.shoulderWidth}
                onChange={(e) => setAvatar({...avatar, shoulderWidth: parseInt(e.target.value)})}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
              />
            </div>

            {/* 팔 길이 */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold">팔 길이</label>
                <span className="text-sm text-gray-600">{avatar.armLength} cm</span>
              </div>
              <input 
                type="range" 
                min="50" 
                max="70" 
                value={avatar.armLength}
                onChange={(e) => setAvatar({...avatar, armLength: parseInt(e.target.value)})}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
              />
            </div>

            {/* 가슴 둘레 */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold">가슴 둘레</label>
                <span className="text-sm text-gray-600">{avatar.chestSize} cm</span>
              </div>
              <input 
                type="range" 
                min="80" 
                max="120" 
                value={avatar.chestSize}
                onChange={(e) => setAvatar({...avatar, chestSize: parseInt(e.target.value)})}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
              />
            </div>

            {/* 허리 둘레 */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold">허리 둘레</label>
                <span className="text-sm text-gray-600">{avatar.waistSize} cm</span>
              </div>
              <input 
                type="range" 
                min="60" 
                max="110" 
                value={avatar.waistSize}
                onChange={(e) => setAvatar({...avatar, waistSize: parseInt(e.target.value)})}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
              />
            </div>

            {/* 엉덩이 둘레 */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold">엉덩이 둘레</label>
                <span className="text-sm text-gray-600">{avatar.hipCircumference} cm</span>
              </div>
              <input 
                type="range" 
                min="80" 
                max="120" 
                value={avatar.hipCircumference}
                onChange={(e) => setAvatar({...avatar, hipCircumference: parseInt(e.target.value)})}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
              />
            </div>

            {/* 안다리 길이 */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold">안다리 길이</label>
                <span className="text-sm text-gray-600">{avatar.inseam} cm</span>
              </div>
              <input 
                type="range" 
                min="60" 
                max="90" 
                value={avatar.inseam}
                onChange={(e) => setAvatar({...avatar, inseam: parseInt(e.target.value)})}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
              />
            </div>

            {/* 허벅지 둘레 */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold">허벅지 둘레</label>
                <span className="text-sm text-gray-600">{avatar.thighCircumference} cm</span>
              </div>
              <input 
                type="range" 
                min="45" 
                max="70" 
                value={avatar.thighCircumference}
                onChange={(e) => setAvatar({...avatar, thighCircumference: parseInt(e.target.value)})}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
              />
            </div>

            {/* 종아리 둘레 */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold">종아리 둘레</label>
                <span className="text-sm text-gray-600">{avatar.calfCircumference} cm</span>
              </div>
              <input 
                type="range" 
                min="30" 
                max="45" 
                value={avatar.calfCircumference}
                onChange={(e) => setAvatar({...avatar, calfCircumference: parseInt(e.target.value)})}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
              />
            </div>
          </div>

          {/* 성별 선택 버튼 */}
          <div className="flex gap-3 mt-6">
            <button className="flex-1 py-2 text-sm text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition">
              바디
            </button>
            <button className="flex-1 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition">
              페이스
            </button>
            <button className="flex-1 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition">
              헤어
            </button>
          </div>
        </div>

        {/* 저장하기 버튼 */}
        <button 
          onClick={() => {
            setIsAvatarSaved(true);
            alert('아바타가 저장되었습니다!');
            setCurrentPage('home');
          }}
          className="w-full bg-black text-white py-4 rounded-xl font-semibold hover:bg-gray-800 transition"
        >
          저장하기
        </button>
      </div>

      {/* 하단 네비게이션 */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg md:hidden">
        <div className="flex justify-around p-4">
          <button 
            onClick={() => setCurrentPage('home')}
            className="flex flex-col items-center gap-1"
          >
            <Home size={24} />
            <span className="text-xs">홈</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <UserCircle size={24} className="text-black" />
            <span className="text-xs font-semibold">아바타</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <Bell size={24} />
            <span className="text-xs">알림</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <Heart size={24} />
            <span className="text-xs">찜</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <User size={24} />
            <span className="text-xs">마이</span>
          </button>
        </div>
      </nav>
    </div>
  );

  // 마이페이지 화면
  const MyPageScreen = () => (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* 헤더 */}
      <header className="bg-white p-4 shadow">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-xl font-bold">마이페이지</h1>
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-4">
        {/* 사용자 정보 카드 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-4">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-3xl">
                🧍
              </div>
              <div>
                <h2 className="font-bold text-lg">사용자님</h2>
                <p className="text-sm text-gray-600">안녕 반갑 오늘도 멋진 하루!</p>
              </div>
            </div>
            <button className="text-sm text-gray-500">{">"}</button>
          </div>

          {/* 주문/배송 정보 */}
          <div className="grid grid-cols-2 gap-3">
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="text-sm text-gray-600 mb-1">게시글</div>
              <div className="font-bold">0개</div>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="text-sm text-gray-600 mb-1">댓글</div>
              <div className="font-bold">0개</div>
            </div>
          </div>
        </div>

        {/* 주요 기능 아이콘 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-4">
          <div className="flex justify-around">
            <button 
              onClick={() => setCurrentPage('favorites')}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                <Heart size={24} className="text-pink-500" />
              </div>
              <span className="text-xs">관심</span>
            </button>
            <button className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <ShoppingCart size={24} className="text-blue-500" />
              </div>
              <span className="text-xs">주문</span>
            </button>
            <button className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Bell size={24} className="text-green-500" />
              </div>
              <span className="text-xs">알림</span>
            </button>
          </div>
        </div>

        {/* 메뉴 리스트 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <button 
            onClick={() => setCurrentPage('avatarInfo')}
            className="w-full p-4 flex items-center justify-between border-b hover:bg-gray-50 transition"
          >
            <span className="font-medium">아바타</span>
            <span className="text-gray-400">{">"}</span>
          </button>
          <button className="w-full p-4 flex items-center justify-between border-b hover:bg-gray-50 transition">
            <span className="font-medium">주문 내역</span>
            <span className="text-gray-400">{">"}</span>
          </button>
          <button className="w-full p-4 flex items-center justify-between border-b hover:bg-gray-50 transition">
            <span className="font-medium">최근 본 상품 내역</span>
            <span className="text-gray-400">{">"}</span>
          </button>
          <button className="w-full p-4 flex items-center justify-between border-b hover:bg-gray-50 transition">
            <span className="font-medium">리뷰 쓰기</span>
            <span className="text-gray-400">{">"}</span>
          </button>
          <button className="w-full p-4 flex items-center justify-between border-b hover:bg-gray-50 transition">
            <span className="font-medium">나의 등급 정보</span>
            <span className="text-gray-400">{">"}</span>
          </button>
          <button className="w-full p-4 flex items-center justify-between border-b hover:bg-gray-50 transition">
            <span className="font-medium">마케팅/프로젝트</span>
            <span className="text-gray-400">{">"}</span>
          </button>
          <button className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition">
            <span className="font-medium">고객센터</span>
            <span className="text-gray-400">{">"}</span>
          </button>
        </div>
      </div>

      {/* 하단 네비게이션 */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg md:hidden">
        <div className="flex justify-around p-4">
          <button 
            onClick={() => setCurrentPage('home')}
            className="flex flex-col items-center gap-1"
          >
            <Home size={24} />
            <span className="text-xs">홈</span>
          </button>
          <button 
            onClick={() => setCurrentPage('avatar')}
            className="flex flex-col items-center gap-1"
          >
            <UserCircle size={24} />
            <span className="text-xs">아바타</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <Bell size={24} />
            <span className="text-xs">알림</span>
          </button>
          <button 
            onClick={() => setCurrentPage('favorites')}
            className="flex flex-col items-center gap-1"
          >
            <Heart size={24} />
            <span className="text-xs">찜</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <User size={24} className="text-black" />
            <span className="text-xs font-semibold">마이</span>
          </button>
        </div>
      </nav>
    </div>
  );

  // 관심(찜) 페이지 화면
  const FavoritesScreen = () => {
    const favoriteProducts = products.filter(p => favorites.includes(p.id));

    return (
      <div className="min-h-screen bg-gray-50 pb-20">
        {/* 헤더 */}
        <header className="bg-white p-4 shadow">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <h1 className="text-xl font-bold">관심</h1>
            <div className="flex gap-2">
              <button><Search size={24} /></button>
              <button><ShoppingCart size={24} /></button>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto p-4">
          {/* 탭 메뉴 */}
          <div className="flex gap-4 mb-6 border-b">
            <button className="pb-3 px-2 border-b-2 border-black font-semibold">
              상품 1
            </button>
            <button className="pb-3 px-2 text-gray-500">
              브랜드 0
            </button>
            <button className="pb-3 px-2 text-gray-500">
              스타일
            </button>
          </div>

          {/* 필터 */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex gap-2">
              <button className="px-4 py-2 text-sm bg-white rounded-full shadow hover:shadow-md transition">
                카테고리
              </button>
              <button className="px-4 py-2 text-sm bg-white rounded-full shadow hover:shadow-md transition">
                필터
              </button>
            </div>
            <button className="text-sm text-gray-600">정렬</button>
          </div>

          {/* 찜한 상품 목록 */}
          {favoriteProducts.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">❤️</div>
              <p className="text-gray-500">아직 찜한 상품이 없습니다</p>
              <button 
                onClick={() => setCurrentPage('home')}
                className="mt-4 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
              >
                쇼핑하러 가기
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {favoriteProducts.map(product => (
                <div key={product.id} className="bg-white rounded-lg shadow overflow-hidden hover:shadow-xl transition">
                  <div className="relative">
                    <div className="aspect-square bg-gray-100 flex items-center justify-center text-6xl">
                      {product.image}
                    </div>
                    <button 
                      onClick={() => setFavorites(favorites.filter(id => id !== product.id))}
                      className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-lg"
                    >
                      <Heart size={20} className="text-red-500" fill="currentColor" />
                    </button>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-1 text-sm">{product.name}</h3>
                    <div className="flex items-center gap-1 mb-2">
                      <span className="text-yellow-500">★</span>
                      <span className="text-sm">{product.rating}</span>
                    </div>
                    <div className="text-red-600 font-bold">
                      {product.price.toLocaleString()}원
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 하단 네비게이션 */}
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg md:hidden">
          <div className="flex justify-around p-4">
            <button 
              onClick={() => setCurrentPage('home')}
              className="flex flex-col items-center gap-1"
            >
              <Home size={24} />
              <span className="text-xs">홈</span>
            </button>
            <button 
              onClick={() => setCurrentPage('avatar')}
              className="flex flex-col items-center gap-1"
            >
              <UserCircle size={24} />
              <span className="text-xs">아바타</span>
            </button>
            <button className="flex flex-col items-center gap-1">
              <Bell size={24} />
              <span className="text-xs">알림</span>
            </button>
            <button className="flex flex-col items-center gap-1">
              <Heart size={24} className="text-black" fill="currentColor" />
              <span className="text-xs font-semibold">찜</span>
            </button>
            <button 
              onClick={() => setCurrentPage('mypage')}
              className="flex flex-col items-center gap-1"
            >
              <User size={24} />
              <span className="text-xs">마이</span>
            </button>
          </div>
        </nav>
      </div>
    );
  };

  // 아바타 정보 보기 화면
  const AvatarInfoScreen = () => (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* 헤더 */}
      <header className="bg-white p-4 shadow">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button onClick={() => setCurrentPage('mypage')} className="text-xl">&lt;</button>
          <h1 className="text-xl font-bold">내 아바타</h1>
          <button 
            onClick={() => setCurrentPage('avatar')}
            className="text-sm text-blue-600"
          >
            수정
          </button>
        </div>
      </header>

      <div className="max-w-md mx-auto p-4">
        {!isAvatarSaved ? (
          // 아바타가 없을 때
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="text-6xl mb-4">🧍</div>
            <h2 className="text-lg font-bold mb-2">아바타를 생성해주세요</h2>
            <p className="text-gray-600 mb-6">
              체형 정보를 입력하면<br />
              맞춤형 의류를 추천해드립니다
            </p>
            <button 
              onClick={() => setCurrentPage('avatar')}
              className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
            >
              아바타 생성하기
            </button>
          </div>
        ) : (
          // 아바타가 있을 때
          <div>
            {/* 아바타 프리뷰 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-4">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-8 flex items-center justify-center mb-4" style={{minHeight: '300px'}}>
                <div className="text-8xl">🧍</div>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-lg mb-2">나의 체형 정보</h3>
                <p className="text-sm text-gray-600">
                  이 정보를 바탕으로 맞춤 의류를 추천합니다
                </p>
              </div>
            </div>

            {/* 체형 정보 상세 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-4">
              <h3 className="font-bold text-lg mb-4">신체 치수</h3>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">키</span>
                  <span className="font-semibold">{avatar.height} cm</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">몸무게</span>
                  <span className="font-semibold">{avatar.weight} kg</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">어깨 너비</span>
                  <span className="font-semibold">{avatar.shoulderWidth} cm</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">팔 길이</span>
                  <span className="font-semibold">{avatar.armLength} cm</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">가슴 둘레</span>
                  <span className="font-semibold">{avatar.chestSize} cm</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">허리 둘레</span>
                  <span className="font-semibold">{avatar.waistSize} cm</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">엉덩이 둘레</span>
                  <span className="font-semibold">{avatar.hipCircumference} cm</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">안다리 길이</span>
                  <span className="font-semibold">{avatar.inseam} cm</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">허벅지 둘레</span>
                  <span className="font-semibold">{avatar.thighCircumference} cm</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">종아리 둘레</span>
                  <span className="font-semibold">{avatar.calfCircumference} cm</span>
                </div>
              </div>
            </div>

            {/* BMI 정보 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-4">
              <h3 className="font-bold text-lg mb-4">체형 분석</h3>
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">BMI 지수</span>
                  <span className="font-bold text-lg">
                    {(avatar.weight / Math.pow(avatar.height / 100, 2)).toFixed(1)}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full" 
                    style={{width: `${Math.min((avatar.weight / Math.pow(avatar.height / 100, 2)) / 30 * 100, 100)}%`}}
                  ></div>
                </div>
                <p className="text-xs text-gray-600 mt-2">
                  {(avatar.weight / Math.pow(avatar.height / 100, 2)) < 18.5 ? '저체중' :
                   (avatar.weight / Math.pow(avatar.height / 100, 2)) < 23 ? '정상' :
                   (avatar.weight / Math.pow(avatar.height / 100, 2)) < 25 ? '과체중' : '비만'}
                </p>
              </div>
            </div>

            {/* 추천 사이즈 */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-bold text-lg mb-4">추천 사이즈</h3>
              <div className="grid grid-cols-3 gap-3">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-xs text-gray-600 mb-1">상의</div>
                  <div className="font-bold text-lg">
                    {avatar.chestSize < 90 ? 'S' : avatar.chestSize < 100 ? 'M' : avatar.chestSize < 110 ? 'L' : 'XL'}
                  </div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-xs text-gray-600 mb-1">하의</div>
                  <div className="font-bold text-lg">
                    {avatar.waistSize < 75 ? 'S' : avatar.waistSize < 85 ? 'M' : avatar.waistSize < 95 ? 'L' : 'XL'}
                  </div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-xs text-gray-600 mb-1">신발</div>
                  <div className="font-bold text-lg">
                    {avatar.height < 165 ? '250' : avatar.height < 175 ? '260' : avatar.height < 185 ? '270' : '280'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 하단 네비게이션 */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg md:hidden">
        <div className="flex justify-around p-4">
          <button 
            onClick={() => setCurrentPage('home')}
            className="flex flex-col items-center gap-1"
          >
            <Home size={24} className={currentPage === 'home' ? 'text-black' : ''} />
            <span className={`text-xs ${currentPage === 'home' ? 'font-semibold' : ''}`}>홈</span>
          </button>
          <button 
            onClick={() => setCurrentPage('avatar')}
            className="flex flex-col items-center gap-1"
          >
            <UserCircle size={24} className={currentPage === 'avatar' ? 'text-black' : ''} />
            <span className={`text-xs ${currentPage === 'avatar' ? 'font-semibold' : ''}`}>아바타</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <Bell size={24} />
            <span className="text-xs">알림</span>
          </button>
          <button 
            onClick={() => setCurrentPage('favorites')}
            className="flex flex-col items-center gap-1"
          >
            <Heart size={24} className={currentPage === 'favorites' ? 'text-black' : ''} />
            <span className={`text-xs ${currentPage === 'favorites' ? 'font-semibold' : ''}`}>찜</span>
          </button>
          <button 
            onClick={() => setCurrentPage('mypage')}
            className="flex flex-col items-center gap-1"
          >
            <User size={24} className={currentPage === 'mypage' || currentPage === 'avatarInfo' ? 'text-black' : ''} />
            <span className={`text-xs ${currentPage === 'mypage' || currentPage === 'avatarInfo' ? 'font-semibold' : ''}`}>마이</span>
          </button>
        </div>
      </nav>
    </div>
  );

  // 장바구니 화면
  const CartScreen = () => (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* 헤더 */}
      <header className="bg-white p-4 shadow">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button onClick={() => setCurrentPage('home')} className="text-xl">&lt;</button>
          <h1 className="text-xl font-bold">장바구니</h1>
          <div className="w-6"></div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-4">
        {cartItems.length === 0 ? (
          // 장바구니가 비었을 때
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🛒</div>
            <p className="text-gray-500 mb-2">장바구니가 비어있습니다</p>
            <p className="text-sm text-gray-400 mb-6">원하는 상품을 담아보세요</p>
            <button 
              onClick={() => setCurrentPage('home')}
              className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
            >
              쇼핑하러 가기
            </button>
          </div>
        ) : (
          // 장바구니에 상품이 있을 때
          <div>
            <div className="bg-white rounded-xl shadow mb-4">
              <div className="p-4 border-b">
                <div className="flex items-center gap-2">
                  <input type="checkbox" />
                  <span className="font-semibold">배송 상품 ({cartItems.length})</span>
                </div>
              </div>

              {cartItems.map(item => (
                <div key={item.id} className="p-4 border-b flex gap-4">
                  <input type="checkbox" />
                  <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center text-3xl">
                    {item.image}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-600">수량: 1개</p>
                    <p className="text-red-600 font-bold mt-2">{item.price.toLocaleString()}원</p>
                  </div>
                  <button 
                    onClick={() => setCartItems(cartItems.filter(i => i.id !== item.id))}
                    className="text-gray-400 hover:text-black"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            {/* 주문 금액 */}
            <div className="bg-white rounded-xl shadow p-6 mb-4">
              <h2 className="font-bold mb-4">주문 금액</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>상품 금액</span>
                  <span>{cartItems.reduce((sum, item) => sum + item.price, 0).toLocaleString()}원</span>
                </div>
                <div className="flex justify-between">
                  <span>배송비</span>
                  <span>3,000원</span>
                </div>
                <div className="border-t pt-2 mt-2 flex justify-between font-bold text-lg">
                  <span>총 결제금액</span>
                  <span className="text-red-600">
                    {(cartItems.reduce((sum, item) => sum + item.price, 0) + 3000).toLocaleString()}원
                  </span>
                </div>
              </div>
            </div>

            <button 
              onClick={() => {
                alert('주문이 완료되었습니다!');
                setCartItems([]);
                setCurrentPage('home');
              }}
              className="w-full bg-black text-white py-4 rounded-xl font-semibold hover:bg-gray-800 transition"
            >
              구매하기
            </button>
          </div>
        )}
      </div>

      {/* 하단 네비게이션 */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg md:hidden">
        <div className="flex justify-around p-4">
          <button 
            onClick={() => setCurrentPage('home')}
            className="flex flex-col items-center gap-1"
          >
            <Home size={24} className={currentPage === 'home' ? 'text-black' : ''} />
            <span className={`text-xs ${currentPage === 'home' ? 'font-semibold' : ''}`}>홈</span>
          </button>
          <button 
            onClick={() => setCurrentPage('avatar')}
            className="flex flex-col items-center gap-1"
          >
            <UserCircle size={24} className={currentPage === 'avatar' ? 'text-black' : ''} />
            <span className={`text-xs ${currentPage === 'avatar' ? 'font-semibold' : ''}`}>아바타</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <Bell size={24} />
            <span className="text-xs">알림</span>
          </button>
          <button 
            onClick={() => setCurrentPage('favorites')}
            className="flex flex-col items-center gap-1"
          >
            <Heart size={24} className={currentPage === 'favorites' ? 'text-black' : ''} />
            <span className={`text-xs ${currentPage === 'favorites' ? 'font-semibold' : ''}`}>찜</span>
          </button>
          <button 
            onClick={() => setCurrentPage('mypage')}
            className="flex flex-col items-center gap-1"
          >
            <User size={24} className={currentPage === 'mypage' ? 'text-black' : ''} />
            <span className={`text-xs ${currentPage === 'mypage' ? 'font-semibold' : ''}`}>마이</span>
          </button>
        </div>
      </nav>
    </div>
  );

  // 페이지 렌더링
  return (
    <div>
      {currentPage === 'login' && <LoginScreen />}
      {currentPage === 'signup' && <SignupScreen />}
      {currentPage === 'home' && <HomeScreen />}
      {currentPage === 'avatar' && <AvatarScreen />}
      {currentPage === 'mypage' && <MyPageScreen />}
      {currentPage === 'favorites' && <FavoritesScreen />}
      {currentPage === 'avatarInfo' && <AvatarInfoScreen />}
      {currentPage === 'cart' && <CartScreen />}
    </div>
  );
};

export default AvatarFashionShop;