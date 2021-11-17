// Copyright 2017-2021 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { hexStripPrefix } from '.';

describe('hexStripPrefix', (): void => {
  it('returns an empty string when null value supplied', (): void => {
    expect(
      hexStripPrefix(null)
    ).toEqual('');
  });

  it('returns an empty string when 0x value supplied', (): void => {
    expect(
      hexStripPrefix('0x')
    ).toEqual('');
  });

  it('strips the prefix from hex strings', (): void => {
    expect(
      hexStripPrefix('0x1223')
    ).toEqual('1223');
  });

  it('returns un-prefixed hex as-is', (): void => {
    expect(
      hexStripPrefix('abcd1223')
    ).toEqual('abcd1223');
  });
});
