import { gql } from '@apollo/client';

export const CREATE_PERSCRIPTION = gql`
  mutation createPerscription($patient: String!, $Medication: String!) {
    createPerscription(patient:$patient , Medication: $Medication) {
      _id
      patient
      medication
    }
  }
`;