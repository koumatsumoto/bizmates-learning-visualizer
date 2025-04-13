export interface BizmatesVideo {
  id: number;
  sample: string | null;
  can_unlock: boolean | null;
  revamp_video: boolean | null;
  revamp_video_url: string | null;
  force_unlocked: boolean | null;
}

export interface BizmatesMaterial {
  url: string;
  can_unlock: boolean | null;
  force_unlocked: boolean | null;
  html_material_url: string;
  revamp_material: boolean | null;
}

export interface BizmatesChallengeCriteriaAnswer {
  situation: string;
  answer: string;
  criteria: string;
  order_no: number;
  nickname: string;
}

export interface BizmatesHistory {
  id: number;
  program_id: number;
  teacher_id: number;
  teacher_photo: string;
  teacher_nickname: string;
  teacher_message: string;
  lesson_taken_platform: string;
  lesson_id: number;
  student_memo: string | null;
  student_message: string | null;
  student_dislike_id: number | null;
  student_book_id: number;
  evaluation_vote_id: number | null;
  display_lesson_date: string;
  has_mystage_history: boolean;
  challenge_criteria_answers: BizmatesChallengeCriteriaAnswer[];
  order_no: number;
  challenge_situation_count: number;
  mywordbook_lesson_url: string;
  wordbook_notify: string;
  is_other_or_assist_lesson: boolean;
  program_name: string;
  strength_content: string | null;
  weakness_content: string | null;
  advice_content: string | null;
  words: string[];
  phrase: string[];
  can_vote: boolean | null;
}

export interface BizmatesDiscovery {
  id: number;
  title: string;
  image_url: string;
}

export interface BizmatesLesson {
  lesson_no: number;
  complete: boolean;
  display_lesson_name: string;
  display_lesson_date: string | null;
  platform_mystage: string | null;
  program_id: number;
  lesson_id: number;
  rank_id: number;
  video: BizmatesVideo;
  material: BizmatesMaterial;
  histories: BizmatesHistory[] | null;
  discovery: BizmatesDiscovery | null;
}

export interface BizmatesRankLabel {
  rank_name: string;
  rank_name_jp: string;
  level_name: string;
  level_name_jp: string;
  rank_label: string;
  rank_label_jp: string;
  rv_st_combined_materials_url: string | null;
}

export interface BizmatesLessonProgress {
  lesson_no: number;
  complete: boolean;
}

export interface BizmatesUnlockedMaterial {
  is_learned: boolean;
  material: BizmatesMaterial;
  video: BizmatesVideo;
}

export interface BizmatesBookmarkList {
  id: string;
  bookmark_list_name: string;
  is_default: boolean;
}

export interface BizmatesStudentHistoryBaseInfo {
  persistent_announcement: string | null;
  lessons: BizmatesLesson[];
  rank_id: number;
  rank_label: BizmatesRankLabel;
  next_lesson_id: number | null;
  assessment: BizmatesLesson | null;
  complete_ratio: number;
  uncomplete_ratio: number;
  is_student_revamp: boolean;
  lesson_progresses: BizmatesLessonProgress[];
  unlocked_materials: BizmatesUnlockedMaterial[];
  other_material_not_all_opened: boolean;
  download_path: string;
  bookmarklist: BizmatesBookmarkList[];
  is_not_b2b: boolean;
  is_expired: boolean;
  indexes: any[];
  page: number;
  paging_target: string;
  now_page_name: string;
  form_name: string;
  page_max: number;
}

export interface BizmatesApiResponse {
  data: {
    student_history_base_info: BizmatesStudentHistoryBaseInfo;
  };
} 