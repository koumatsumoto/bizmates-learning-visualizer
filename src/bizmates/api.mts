import type { BizmatesApiResponse } from "./types.mts";

const BIZMATES_API_URL = "https://www.bizmates.jp/graphql";

export class BizmatesApiClient {
  private readonly token: string;

  constructor(token: string) {
    this.token = token;
  }

  async getStudentHistoryBaseInfo(params: {
    page: number;
    program_id: number;
    rank_id?: number | undefined;
    order?: string | undefined;
  }): Promise<BizmatesApiResponse> {
    const response = await fetch(BIZMATES_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
      body: JSON.stringify({
        query: `query ($page: Int!, $program_id: Int!, $rank_id: Int, $order: String) {
          student_history_base_info(
            page: $page
            program_id: $program_id
            rank_id: $rank_id
            order: $order
          ) {
            persistent_announcement
            lessons {
              lesson_no
              complete
              display_lesson_name
              display_lesson_date
              platform_mystage
              program_id
              lesson_id
              rank_id
              video {
                id
                sample
                can_unlock
                revamp_video
                revamp_video_url
                force_unlocked
              }
              material {
                url
                can_unlock
                force_unlocked
                html_material_url
                revamp_material
              }
              histories {
                id
                program_id
                teacher_id
                teacher_photo
                teacher_nickname
                teacher_message
                lesson_taken_platform
                lesson_id
                student_memo
                student_message
                student_dislike_id
                student_book_id
                evaluation_vote_id
                display_lesson_date
                has_mystage_history
                challenge_criteria_answers {
                  situation
                  answer
                  criteria
                  order_no
                  nickname
                }
                order_no
                challenge_situation_count
                mywordbook_lesson_url
                wordbook_notify
                is_other_or_assist_lesson
                program_name
                strength_content
                weakness_content
                advice_content
                words
                phrase
                can_vote
              }
              discovery {
                id
                title
                image_url
              }
            }
            rank_id
            rank_label {
              rank_name
              rank_name_jp
              level_name
              level_name_jp
              rank_label
              rank_label_jp
              rv_st_combined_materials_url
            }
            next_lesson_id
            assessment {
              lesson_no
              complete
              display_lesson_name
              display_lesson_date
              platform_mystage
              program_id
              video {
                id
                sample
                can_unlock
                revamp_video
                revamp_video_url
                force_unlocked
              }
              material {
                url
                can_unlock
                force_unlocked
                html_material_url
                revamp_material
              }
              histories {
                id
                program_id
                teacher_id
                teacher_photo
                teacher_nickname
                teacher_message
                lesson_taken_platform
                lesson_id
                student_memo
                student_message
                student_dislike_id
                student_book_id
                evaluation_vote_id
                display_lesson_date
                has_mystage_history
                challenge_criteria_answers {
                  situation
                  answer
                  criteria
                  order_no
                  nickname
                }
                order_no
                challenge_situation_count
                mywordbook_lesson_url
                wordbook_notify
                is_other_or_assist_lesson
                program_name
                strength_content
                weakness_content
                advice_content
                words
                phrase
                can_vote
              }
              discovery {
                id
                title
                image_url
              }
            }
            complete_ratio
            uncomplete_ratio
            is_student_revamp
            lesson_progresses {
              lesson_no
              complete
            }
            unlocked_materials {
              is_learned
              material {
                url
                can_unlock
                force_unlocked
                html_material_url
                revamp_material
              }
              video {
                id
                sample
                can_unlock
                revamp_video
                revamp_video_url
                force_unlocked
              }
            }
            other_material_not_all_opened
            download_path
            bookmarklist {
              id
              bookmark_list_name
              is_default
            }
            is_not_b2b
            is_expired
            indexes
            page
            paging_target
            now_page_name
            form_name
            page_max
          }
        }`,
        variables: params,
      }),
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    return response.json();
  }
}
