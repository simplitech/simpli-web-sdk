/**
 * @file
 * Global VUE Components
 * Used in library: vue
 *
 * Use this file to register components globally
 * This configuration will be set in @/bootstrap/app.ts
 */

import { Await } from '../components/Await'
import { Modal } from '../components/Modal'
import { AdapHeader } from '../components/adap/AdapHeader'
import { AdapTable } from '../components/adap/AdapTable'
import { AdapOrderby } from '../components/adap/AdapOrderby'
import { AdapPagination } from '../components/adap/AdapPagination'
import { AdapSearchfield } from '../components/adap/AdapSearchfield'
import { InputGroup } from '../components/formGroup/InputGroup'
import { CheckboxGroup } from '../components/formGroup/CheckboxGroup'
import { MultiselectGroup } from '../components/formGroup/MultiselectGroup'
import { TextareaGroup } from '../components/formGroup/TextareaGroup'

/**
 * Global VUE Components
 */
export const defaultComponents: any = {
  Await,
  Modal,
  AdapHeader,
  AdapTable,
  AdapOrderby,
  AdapPagination,
  AdapSearchfield,
  InputGroup,
  CheckboxGroup,
  MultiselectGroup,
  TextareaGroup,
}
