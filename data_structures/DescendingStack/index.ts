import OrderedStack from '../OrderedStack';

export default class DescendingStack extends OrderedStack<number> {
  constructor(defaultValues?: number[]) {
    super((cur, pre) => pre - cur, defaultValues);
  }
}
