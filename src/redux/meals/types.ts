export type MealState = Readonly<{
  test: string;
}>;

export const TEST_ACTION = 'TEST_ACTION';
export const TEST_SUCCESS_ACTION = 'TEST_SUCCESS_ACTION';

interface TestAction {
  type: typeof TEST_ACTION;
  value: string;
}

interface TestSuccessAction {
  type: typeof TEST_SUCCESS_ACTION;
}

export type ConfigActionTypes = TestAction | TestSuccessAction;
