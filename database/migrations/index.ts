import * as migration_20240904_102828_optional_name_here from './20240904_102828_optional_name_here';
import * as migration_20240904_103507_cta from './20240904_103507_cta';

export const migrations = [
  {
    up: migration_20240904_102828_optional_name_here.up,
    down: migration_20240904_102828_optional_name_here.down,
    name: '20240904_102828_optional_name_here',
  },
  {
    up: migration_20240904_103507_cta.up,
    down: migration_20240904_103507_cta.down,
    name: '20240904_103507_cta'
  },
];
