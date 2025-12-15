
import { Question, QuestionType } from './types';

const cleanUrl = (url: string | undefined): string | undefined => {
    if (!url) return undefined;
    return url.trim().replace(/\s+/g, '');
};

export const QUIZ_DATA: Question[] = [
  // --- Block 1 ---
  {
    id: 1,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "Listen and write the word:",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/Thi_cac_cap/2019-2020/Tinh_Thanhpho/L4/Nghe/De2/1/medicine.mp3"),
    correctAnswer: "medicine",
    explanation: "Medicine: Thuốc."
  },
  {
    id: 2,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "Listen and choose the correct answer.",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/IOE%202022-2023/Chinhthuc/Captinh/Lop4/Amthanh/E4-T-15.mp3"),
    options: ["Mouse", "Ground", "Brown", "Crown"],
    correctAnswer: "Brown",
    explanation: "Brown: Màu nâu."
  },
  {
    id: 3,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "Listen and write the missing word:",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/ImageExam/2019/2/22/636864426361958644_Audio.mp3"),
    correctAnswer: "hospital",
    explanation: "Hospital: Bệnh viện."
  },
  {
    id: 4,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "Listen and choose the correct answer.",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/IOE%202022-2023/Chinhthuc/Captinh/Lop4/Amthanh/E4-T-31.mp3"),
    options: ["Mother", "Nurse", "Father", "Grandma"],
    correctAnswer: "Nurse",
    explanation: "Nurse: Y tá."
  },
  {
    id: 5,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "Listen and choose the correct answer.",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/IOE%202022-2023/Chinhthuc/Captinh/Lop4/Amthanh/E4-T-2.mp3"),
    options: ["Rice", "Nine", "Bye", "Nice"],
    correctAnswer: "Nice",
    explanation: "Nice: Tốt/Đẹp."
  },
  {
    id: 6,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "Listen and choose the correct answer.",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/IOE%202022-2023/Chinhthuc/Captinh/Lop4/Amthanh/E4-T-60.mp3"),
    options: ["Flower", "Floor", "Flash", "Black"],
    correctAnswer: "Floor",
    explanation: "Floor: Sàn nhà."
  },
  {
    id: 7,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "Listen and choose the correct answer.",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/IOE%202022-2023/Chinhthuc/Captinh/Lop4/Amthanh/E4-T-6.mp3"),
    options: ["Brown", "Black", "Balloon", "Blue"],
    correctAnswer: "Balloon",
    explanation: "Balloon: Bóng bay."
  },
  {
    id: 8,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "Listen and choose the correct answer.",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/IOE%202022-2023/Chinhthuc/Captinh/Lop4/Amthanh/E4-T-43.mp3"),
    options: ["Old", "Short", "Tall", "Slim"],
    correctAnswer: "Slim",
    explanation: "Slim: Mảnh khảnh."
  },
  {
    id: 9,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "Listen and write the word:",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/Thi_cac_cap/2019-2020/Tinh_Thanhpho/L4/Nghe/De1/1/pork.mp3"),
    correctAnswer: "pork",
    explanation: "Pork: Thịt lợn."
  },
  {
    id: 10,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "Listen and choose the correct answer.",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/IOE%202022-2023/Chinhthuc/Captinh/Lop4/Amthanh/E4-T-19.mp3"),
    options: ["Dear", "Meat", "Near", "Year"],
    correctAnswer: "Near",
    explanation: "Near: Gần."
  },
  {
    id: 11,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "I play soccer at the _ _ _ _ .",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/IOE%202022-2023/Chinhthuc/Captinh/Lop4/Amthanh/E4-T-81.mp3"),
    correctAnswer: "park",
    explanation: "Park: Công viên."
  },
  {
    id: 12,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "I enjoy my _ _ _ _ on Sunday.",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/IOE%202022-2023/Chinhthuc/Captinh/Lop4/Amthanh/E4-T-82.mp3"),
    correctAnswer: "time",
    explanation: "Time: Thời gian."
  },
  {
    id: 13,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "I _ _ my laundry.",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/IOE%202022-2023/Chinhthuc/Captinh/Lop4/Amthanh/E4-T-80.mp3"),
    correctAnswer: "do",
    explanation: "Do laundry: Giặt giũ."
  },
  {
    id: 14,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "Thanks for your _ _ _ _ _ _ _ .",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/Thi_cac_cap/2019-2020/Tinh_Thanhpho/L4/Nghe/De1/2/11.mp3"),
    correctAnswer: "present",
    explanation: "Present: Món quà."
  },
  {
    id: 15,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "My favourite TV _ _ _ _ is called Billions.",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/IOE%202022-2023/Chinhthuc/Captinh/Lop4/Amthanh/E4-T-84.mp3"),
    correctAnswer: "show",
    explanation: "TV show: Chương trình truyền hình."
  },
  {
    id: 16,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "I order p_ _ _ _ or eat at a restaurant.",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/IOE%202022-2023/Chinhthuc/Captinh/Lop4/Amthanh/E4-T-72.mp3"),
    correctAnswer: "izza",
    explanation: "Pizza: Bánh pizza."
  },
  {
    id: 17,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "I _ _ _ _ the windows.",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/IOE%202022-2023/Chinhthuc/Captinh/Lop4/Amthanh/E4-T-92.mp3"),
    correctAnswer: "open",
    explanation: "Open: Mở."
  },
  {
    id: 18,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "What is your favourite mo_ _ _ ?",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/IOE%202022-2023/Chinhthuc/Captinh/Lop4/Amthanh/E4-T-101.mp3"),
    correctAnswer: "vie",
    explanation: "Movie: Phim."
  },
  {
    id: 19,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "Where did she buy her pants?",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/IOE%202022-2023/Chinhthuc/Captinh/Lop4/Amthanh/E4-T-118.mp3"),
    options: ["Online", "On Amazon", "In Japan", "In San Francisco"],
    correctAnswer: "Online",
    explanation: "Đáp án: Online."
  },
  {
    id: 20,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "How many brothers and sisters does Sorie have?",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/IOE%202022-2023/Chinhthuc/Captinh/Lop4/Amthanh/E4-T-113.mp3"),
    options: ["Five brothers", "Five brothers and one sister", "Four brothers and two sisters", "Six brothers"],
    correctAnswer: "Five brothers and one sister",
    explanation: "Đáp án: 5 anh em trai và 1 chị em gái."
  },

  // --- Block 2 ---
  {
    id: 21,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "Listen and write the word:",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/ImageExam/2019/2/23/636864827501802142_Audio.mp3"),
    correctAnswer: "engineer",
    explanation: "Engineer: Kỹ sư."
  },
  {
    id: 22,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "David doesn’t like his _ _ _ _ lessons very much.",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/ImageExam/2019/2/22/636864425005705954_Audio.mp3"),
    correctAnswer: "Math",
    explanation: "Math: Toán học."
  },
  {
    id: 23,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "Listen and write the word:",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/ImageExam/2019/2/22/636864426194926971_Audio.mp3"),
    correctAnswer: "doctor",
    explanation: "Doctor: Bác sĩ."
  },
  {
    id: 24,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "Listen and choose the correct answer.",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/IOE%202022-2023/Chinhthuc/Captinh/Lop4/Amthanh/E4-T-34.mp3"),
    options: ["Animal", "Primary", "Library", "Festival"],
    correctAnswer: "Library",
    explanation: "Library: Thư viện."
  },
  {
    id: 25,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "Where’s my _ _ _ _ _ of chocolate?",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/Thi_cac_cap/2019-2020/Tinh_Thanhpho/L4/Nghe/De2/2/13.mp3"),
    correctAnswer: "piece",
    explanation: "Piece: Mẩu, miếng."
  },
  {
    id: 26,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "Listen and choose the correct answer.",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/IOE%202022-2023/Chinhthuc/Captinh/Lop4/Amthanh/E4-T-1.mp3"),
    options: ["Mother", "Brother", "Father", "Farmer"],
    correctAnswer: "Father",
    explanation: "Father: Bố."
  },
  {
    id: 27,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "Wear your school _ _ _ _ _ _ _ on Wednesday.",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/ImageExam/2019/2/23/636864827070081206_Audio.mp3"),
    correctAnswer: "uniform",
    explanation: "Uniform: Đồng phục."
  },
  {
    id: 28,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "Listen and choose the correct answer.",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/IOE%202022-2023/Chinhthuc/Captinh/Lop4/Amthanh/E4-T-11.mp3"),
    options: ["Saturday", "February", "Lemonade", "Tuesday"],
    correctAnswer: "Saturday",
    explanation: "Saturday: Thứ Bảy."
  },
  {
    id: 29,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "There is a _ _ _ _ _ _ near my home.",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/Thi_cac_cap/2019-2020/Tinh_Thanhpho/L4/Nghe/De1/21.mp3"),
    correctAnswer: "museum",
    explanation: "Museum: Bảo tàng."
  },
  {
    id: 30,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "Listen and choose the correct answer.",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/IOE%202022-2023/Chinhthuc/Captinh/Lop4/Amthanh/E4-T-59.mp3"),
    options: ["Fishing", "Evening", "Reading", "Morning"],
    correctAnswer: "Reading",
    explanation: "Reading: Đang đọc."
  },
  {
    id: 31,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "What do you do for _ _ _ ?",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/IOE%202022-2023/Chinhthuc/Captinh/Lop4/Amthanh/E4-T-59.mp3"),
    correctAnswer: "fun",
    explanation: "For fun: Để giải trí."
  },
  {
    id: 32,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "She’s a teacher. She works in a _ _ _ _ _ _ _ school.",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/Thi_cac_cap/2019-2020/Tinh_Thanhpho/L4/Nghe/De1/2/12.mp3"),
    correctAnswer: "primary",
    explanation: "Primary school: Trường tiểu học."
  },
  {
    id: 33,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "Mai is _ _ _ _ _ _ _ _ _ _ her house.",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/Thi_cac_cap/2019-2020/Tinh_Thanhpho/L4/Nghe/De1/2/18.mp3"),
    correctAnswer: "decorating",
    explanation: "Decorating: Trang trí."
  },
  {
    id: 34,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "Where did the children go yesterday?",
    options: ["They went to the park.", "They went to a museum.", "They went to the zoo.", "They went to a farm."],
    correctAnswer: "They went to the zoo.",
    explanation: "Zoo: Sở thú."
  },
  {
    id: 35,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "The _ _ _ _ _ _ has eyes at the front of its head.",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/IOE%202022-2023/TraiNghiem/E4/R3/nghe/Listening414.mp3"),
    correctAnswer: "spider",
    explanation: "Spider: Con nhện."
  },
  {
    id: 36,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "The snow is so much _ _ _ .",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/IOE%202022-2023/Chinhthuc/Captinh/Lop4/Amthanh/E4-T-99.mp3"),
    correctAnswer: "fun",
    explanation: "Fun: Vui."
  },
  {
    id: 37,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "The bread in this bakery is _ _ _ _ _ _ _ _ _ .",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/Thi_cac_cap/2019-2020/Tinh_Thanhpho/L4/Nghe/De2/2/20.mp3"),
    correctAnswer: "delicious",
    explanation: "Delicious: Ngon."
  },
  {
    id: 38,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "But on Thursday, we went _ _ _ _ _ _ _ _ in the lake.",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/IOE%202022-2023/TraiNghiem/E4/R3/nghe/Listening418.mp3"),
    correctAnswer: "swimming",
    explanation: "Swimming: Bơi lội."
  },
  {
    id: 39,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "What’s the girl’s full name? – She’s Sue _ _ _ _ _ .",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/Thi_cac_cap/2019-2020/Tinh_Thanhpho/L4/Nghe/De2/3/22.mp3"),
    correctAnswer: "White",
    explanation: "Sue White (Tên riêng)."
  },
  {
    id: 40,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "How many brothers and sisters does Sorie have?",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/IOE%202022-2023/Chinhthuc/Captinh/Lop4/Amthanh/E4-T-113.mp3"),
    options: ["Six brothers", "Five brothers and one sister", "Four brothers and two sisters", "Five brothers"],
    correctAnswer: "Five brothers and one sister",
    explanation: "Đáp án: 5 anh em trai và 1 chị em gái."
  },

  // --- Block 3 ---
  {
    id: 41,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "Listen and choose the correct answer.",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/IOE%202022-2023/Chinhthuc/Captinh/Lop4/Amthanh/E4-T-34.mp3"),
    options: ["Animal", "Primary", "Festival", "Library"],
    correctAnswer: "Library",
    explanation: "Library: Thư viện."
  },
  {
    id: 42,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "Listen and write the word (8 letters):",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/IOE%202022-2023/TraiNghiem/E4/R3/nghe/Listening44.mp3"),
    correctAnswer: "mountain",
    explanation: "Mountain: Ngọn núi."
  },
  {
    id: 43,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "Listen and write the word:",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/ImageExam/2019/2/23/636864827501802142_Audio.mp3"),
    correctAnswer: "engineer",
    explanation: "Engineer: Kỹ sư."
  },
  {
    id: 44,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "Listen and choose the correct answer.",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/IOE%202022-2023/Chinhthuc/Captinh/Lop4/Amthanh/E4-T-24.mp3"),
    options: ["Office", "Hospital", "Field", "Factory"],
    correctAnswer: "Factory",
    explanation: "Factory: Nhà máy."
  },
  {
    id: 45,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "She lives on _ _ _ _ Street.",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/Thi_cac_cap/2019-2020/Tinh_Thanhpho/L4/Nghe/De1/23.mp3"),
    correctAnswer: "Main",
    explanation: "Main Street: Đường chính."
  },
  {
    id: 46,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "Listen and write the word (6 letters):",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/IOE%202022-2023/TraiNghiem/E4/R3/nghe/Listening43.mp3"),
    correctAnswer: "picnic",
    explanation: "Picnic: Chuyến dã ngoại."
  },
  {
    id: 47,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "Listen and write the word (6 letters):",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/IOE%202022-2023/TraiNghiem/E4/R3/nghe/Listening410.mp3"),
    correctAnswer: "monkey",
    explanation: "Monkey: Con khỉ."
  },
  {
    id: 48,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "Listen and choose the correct answer.",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/IOE%202022-2023/Chinhthuc/Captinh/Lop4/Amthanh/E4-T-2.mp3"),
    options: ["Bye", "Nine", "Rice", "Nice"],
    correctAnswer: "Nice",
    explanation: "Nice: Tốt/Đẹp."
  },
  {
    id: 49,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "Listen and choose the correct answer.",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/IOE%202022-2023/Chinhthuc/Captinh/Lop4/Amthanh/E4-T-3.mp3"),
    options: ["August", "April", "Australia", "American"],
    correctAnswer: "April",
    explanation: "April: Tháng Tư."
  },
  {
    id: 50,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "Listen and write the word (6 letters):",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/ImageExam/2019/2/22/636864426471958760_Audio.mp3"),
    correctAnswer: "police",
    explanation: "Police: Cảnh sát."
  },
  {
    id: 51,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "I don't study, don't work and don’t clean my house on _ _ _ _ _ _ .",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/IOE%202022-2023/Chinhthuc/Captinh/Lop4/Amthanh/E4-T-70.mp3"),
    correctAnswer: "Sunday",
    explanation: "Sunday: Chủ nhật."
  },
  {
    id: 52,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "Where are they from? – They’re from _ _ _ _ _ _ _ .",
    audioUrl: cleanUrl("https://res.ioe.vn/edu/EOlympic/ExamData/ImageExam/2019/2/22/636864427199304004_Audio.mp3"),
    correctAnswer: "America",
    explanation: "America: Nước Mỹ."
  },
  {
    id: 53,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "I cook a nice _ _ _ _ _ fast.",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/IOE%202022-2023/Chinhthuc/Captinh/Lop4/Amthanh/E4-T-67.mp3"),
    correctAnswer: "lunch",
    explanation: "Lunch: Bữa trưa."
  },
  {
    id: 54,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "The _ _ _ _ _ _ _ jumps out of the water, and little fish are scared.",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/Thi_cac_cap/2019-2020/Tinh_Thanhpho/L4/Nghe/De1/28.mp3"),
    correctAnswer: "dolphin",
    explanation: "Dolphin: Cá heo."
  },
  {
    id: 55,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "I _ _ my laundry.",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/IOE%202022-2023/Chinhthuc/Captinh/Lop4/Amthanh/E4-T-80.mp3"),
    correctAnswer: "do",
    explanation: "Do laundry: Giặt giũ."
  },
  {
    id: 56,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "Mai is _ _ _ _ _ _ _ _ _ _ her house.",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/Thi_cac_cap/2019-2020/Tinh_Thanhpho/L4/Nghe/De1/2/18.mp3"),
    correctAnswer: "decorating",
    explanation: "Decorating: Trang trí."
  },
  {
    id: 57,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "I hate c_ _ _ weather.",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/IOE%202022-2023/Chinhthuc/Captinh/Lop4/Amthanh/E4-T-87.mp3"),
    correctAnswer: "old",
    explanation: "Cold: Lạnh."
  },
  {
    id: 58,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "Would you like to go to the _ _ _ _ _ _ ? - Great idea!",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/Thi_cac_cap/2019-2020/Tinh_Thanhpho/L4/Nghe/De2/2/19.mp3"),
    correctAnswer: "cinema",
    explanation: "Cinema: Rạp phim."
  },
  {
    id: 59,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "She has that shirt in six colours, but not in _____.",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/IOE%202022-2023/Chinhthuc/Captinh/Lop4/Amthanh/E4-T-112.mp3"),
    options: ["black", "orange", "purple", "blue"],
    correctAnswer: "purple",
    explanation: "Purple: Màu tím."
  },
  {
    id: 60,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "What’s Pat’s favourite lunch?",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/Thi_cac_cap/2019-2020/Tinh_Thanhpho/L4/Nghe/De2/3/25.mp3"),
    options: ["Meat and potatoes.", "Chicken and rice.", "Burgers and French fries.", "Meat and tomatoes."],
    correctAnswer: "Burgers and French fries.",
    explanation: "Đáp án: Burgers và Khoai tây chiên."
  },

  // --- Block 4 ---
  {
    id: 61,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "Listen and choose the correct answer.",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/IOE%202022-2023/Chinhthuc/Captinh/Lop4/Amthanh/E4-T-40.mp3"),
    options: ["Dream", "Draw", "Close", "Small"],
    correctAnswer: "Small",
    explanation: "Small: Nhỏ."
  },
  {
    id: 62,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "Listen and write the word:",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/Thi_cac_cap/2019-2020/Tinh_Thanhpho/L4/Nghe/De1/1/dictionary.mp3"),
    correctAnswer: "dictionary",
    explanation: "Dictionary: Từ điển."
  },
  {
    id: 63,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "Listen and choose the correct answer.",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/IOE%202022-2023/Chinhthuc/Captinh/Lop4/Amthanh/E4-T-1.mp3"),
    options: ["Mother", "Father", "Brother", "Farmer"],
    correctAnswer: "Father",
    explanation: "Father: Bố."
  },
  {
    id: 64,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "Listen and write the word (11 letters):",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/IOE%202022-2023/TraiNghiem/E4/R3/nghe/Listening49.mp3"),
    correctAnswer: "supermarket",
    explanation: "Supermarket: Siêu thị."
  },
  {
    id: 65,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "Listen and write the word (7 letters):",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/IOE%202022-2023/TraiNghiem/E4/R3/nghe/Listening45.mp3"),
    correctAnswer: "village",
    explanation: "Village: Ngôi làng."
  },
  {
    id: 66,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "Listen and write the word:",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/Thi_cac_cap/2019-2020/Tinh_Thanhpho/L4/Nghe/De2/1/medicine.mp3"),
    correctAnswer: "medicine",
    explanation: "Medicine: Thuốc."
  },
  {
    id: 67,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "Listen and write the word (9 letters):",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/ImageExam/2019/2/22/636864426658990659_Audio.mp3"),
    correctAnswer: "breakfast",
    explanation: "Breakfast: Bữa sáng."
  },
  {
    id: 68,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "Listen and choose the correct answer.",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/IOE%202022-2023/Chinhthuc/Captinh/Lop4/Amthanh/E4-T-9.mp3"),
    options: ["Office", "Hospital", "Field", "Factory"],
    correctAnswer: "Office",
    explanation: "Office: Văn phòng."
  },
  {
    id: 69,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "Listen and choose the correct answer.",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/IOE%202022-2023/Chinhthuc/Captinh/Lop4/Amthanh/E4-T-59.mp3"),
    options: ["Morning", "Reading", "Evening", "Fishing"],
    correctAnswer: "Reading",
    explanation: "Reading: Đang đọc."
  },
  {
    id: 70,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "Listen and write the word (6 letters):",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/IOE%202022-2023/TraiNghiem/E4/R3/nghe/Listening43.mp3"),
    correctAnswer: "picnic",
    explanation: "Picnic: Chuyến dã ngoại."
  },
  {
    id: 71,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "I love pizza, but I don't like really _ _ _ pizzas.",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/IOE%202022-2023/Chinhthuc/Captinh/Lop4/Amthanh/E4-T-74.mp3"),
    correctAnswer: "hot",
    explanation: "Hot: Cay/Nóng."
  },
  {
    id: 72,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "I clean my kitchen and make my _ _ _ .",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/IOE%202022-2023/Chinhthuc/Captinh/Lop4/Amthanh/E4-T-103.mp3"),
    correctAnswer: "bed",
    explanation: "Make my bed: Dọn giường."
  },
  {
    id: 73,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "Some owls can move their head around and see _ _ _ _ _ _ !",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/Thi_cac_cap/2019-2020/Tinh_Thanhpho/L4/Nghe/De2/3/28.mp3"),
    correctAnswer: "behind",
    explanation: "Behind: Phía sau."
  },
  {
    id: 74,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "Her _ _ _ _ urite comedy is Ace Ventura.",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/IOE%202022-2023/Chinhthuc/Captinh/Lop4/Amthanh/E4-T-77.mp3"),
    correctAnswer: "favo",
    explanation: "Favourite: Yêu thích."
  },
  {
    id: 75,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "I don't study, don't work and don’t clean my house on _ _ _ _ _ _ .",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/IOE%202022-2023/Chinhthuc/Captinh/Lop4/Amthanh/E4-T-70.mp3"),
    correctAnswer: "Sunday",
    explanation: "Sunday: Chủ nhật."
  },
  {
    id: 76,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "I love the out_ _ _ _ s.",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/IOE%202022-2023/Chinhthuc/Captinh/Lop4/Amthanh/E4-T-70.mp3"),
    correctAnswer: "door",
    explanation: "Outdoors: Ngoài trời."
  },
  {
    id: 77,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "My favourite TV _ _ _ _ is called Billions.",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/IOE%202022-2023/Chinhthuc/Captinh/Lop4/Amthanh/E4-T-84.mp3"),
    correctAnswer: "show",
    explanation: "TV show: Chương trình truyền hình."
  },
  {
    id: 78,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "Would you like to go to the _ _ _ _ _ _ ? - Great idea!",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/Thi_cac_cap/2019-2020/Tinh_Thanhpho/L4/Nghe/De2/2/19.mp3"),
    correctAnswer: "cinema",
    explanation: "Cinema: Rạp chiếu phim."
  },
  {
    id: 79,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "When is Michael going to play football?",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/IOE%202022-2023/TraiNghiem/E4/R3/nghe/Listening420.mp3"),
    options: ["He's going to play football on Friday.", "He's going to play football on Sunday.", "He's going to play football on Monday.", "He's going to play football on Saturday."],
    correctAnswer: "He's going to play football on Saturday.",
    explanation: "Đáp án: Thứ Bảy."
  },
  {
    id: 80,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "What’s Pat’s favourite lunch?",
    audioUrl: cleanUrl("https://cdn.ioe.vn/edu/EOlympic/ExamData/Thi_cac_cap/2019-2020/Tinh_Thanhpho/L4/Nghe/De2/3/25.mp3"),
    options: ["Chicken and rice.", "Meat and tomatoes.", "Burgers and French fries.", "Meat and potatoes."],
    correctAnswer: "Burgers and French fries.",
    explanation: "Đáp án: Burgers và Khoai tây chiên."
  }
];
