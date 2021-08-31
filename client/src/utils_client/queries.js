
import { gql } from '@apollo/client';

export const QUERY_PATIENT = gql`

name: {
    type: String,
    required: true,
    unique: true,
  },
  medications :[ 
    Drug:{
      type:String 
    }
    
