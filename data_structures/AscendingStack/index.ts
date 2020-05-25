import OrderedStack from '../OrderedStack';

export default class AscendingStack extends OrderedStack<number> {
  constructor(defaultValues?: number[]) {
    super((cur, pre) => cur - pre, defaultValues);
  }
}
