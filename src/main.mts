import { BizmatesApiClient } from './api/bizmates.mts';
import type { BizmatesStudentHistoryBaseInfo } from './types/bizmates.mts';

/**
 * ビズメイツの学習データを可視化するための関数
 * @param token - 認証トークン
 * @param programId - プログラムID
 * @param rankId - ランクID
 * @returns 可視化結果
 */
export async function visualizeLearningData(
  token: string,
  programId: number,
  rankId?: number
): Promise<BizmatesStudentHistoryBaseInfo> {
  const client = new BizmatesApiClient(token);
  const response = await client.getStudentHistoryBaseInfo({
    page: 0,
    program_id: programId,
    rank_id: rankId ?? undefined,
    order: 'desc',
  });

  return response.data.student_history_base_info;
}

// メイン処理
async function main() {
  try {
    const token = process.env['BIZMATES_TOKEN'];
    if (!token) {
      throw new Error('BIZMATES_TOKEN environment variable is not set');
    }

    const data = await visualizeLearningData(token, 1, 1);
    console.log('取得したデータ:', JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('エラーが発生しました:', error);
  }
}

// プログラムがモジュールとしてインポートされていない場合のみ実行
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
