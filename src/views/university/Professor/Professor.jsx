import React, { Fragment, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import useTeacher from '../../../hooks/useTeacher'
import { Row, Col } from 'reactstrap'
import { Professorslist } from 'components'
import DocentesLiteral from '../../../components/common/DocentesLiteral/DocentesLiteral'
import { config } from '_config'

const Professor = (props) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const { user } = useSelector((state) => state.authentication.user.user_data)
  console.log(user)

  const teacherIdIE = user.codeIE
  const API = `${config.apiEndPoint}/users/teacher/byIE/${teacherIdIE}`
  const { teacher, loading } = useTeacher(API)
  const renderTeacherList = (fixed) => (
    <div>
      <div className="content">
        <Row>
          <Col xs={12} md={12}>
            <div className="page-title">
              <div className="float-left">
                <DocentesLiteral />
              </div>
            </div>

            <div className="col-xl-12">
              <section className="box ">
                <div className="content-body">
                  <div className="row">
                    <div className="col-12">
                      <Professorslist professors={teacher} loading={loading} />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
  return <Fragment>{renderTeacherList()}</Fragment>
}

export default Professor
